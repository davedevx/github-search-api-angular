import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { GithubApiService } from '../../services/github-api/github-api.service';
import { LoaderService } from '../../services/loader/loader-service';
import { Issue } from '../../models/issue';

@Component({
  selector: 'repository-issues',
  templateUrl: './repository-issues.component.html',
})
export class RepositoryIssuesComponent implements OnInit, OnDestroy {
  public subHeading = 'Repository issues by ';
  public repositoryIssueList: Issue[] = [];
  public hasFetched = false;
  public error: string;

  private _subscription: any;
  private _owner: string;
  private _repo: string;

  constructor(
    private _githubApiService: GithubApiService,
    private _loaderService: LoaderService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      this._owner = params.owner;
      this._repo = params.repo;
      this.subHeading += this._owner;

      this._search();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  private _search(): void {
    this._loaderService.setVisiblility(true);
    this._githubApiService.getRepositoryIssues(this._owner, this._repo)
      .subscribe(
        (data: Issue[]) => {
          this._loaderService.setVisiblility(false);
          this.hasFetched = true;

          if (data.length > 0) {
            this.repositoryIssueList = data;
          } else {
            this.repositoryIssueList = [];
            this.error = 'There might not have any issues for this repository.';
          }
        },
        (err: HttpErrorResponse) => {
          this._loaderService.setVisiblility(false);
          this.hasFetched = true;
          this.error = err.statusText;
        }
      );
  }
}
