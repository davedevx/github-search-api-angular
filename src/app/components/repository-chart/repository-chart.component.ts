import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { GithubApiService } from '../../services/github-api/github-api.service';
import { LoaderService } from '../../services/loader/loader-service';

@Component({
  selector: 'repository-chart',
  templateUrl: './repository-chart.component.html',
})
export class RepositoryChartComponent implements OnInit, OnDestroy {
  public subHeading = 'Repository chart of ';
  public hasFetched = false;
  public repository = null;
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
      this.subHeading += `${this._owner}/${this._repo}`;

      this._init();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  private _init(): void {
    this._loaderService.setVisiblility(true);
    this._githubApiService.getRepositoryByOwnerAndRepo(this._owner, this._repo)
      .subscribe(
        (data: any) => {
          this._loaderService.setVisiblility(false);
          this.hasFetched = true;
          this.repository = data;
          this.error = 'Not found';
        },
        (err: HttpErrorResponse) => {
          this._loaderService.setVisiblility(false);
          this.hasFetched = true;
          this.repository = '';
          this.error = err.statusText;
        }
      );
  }
}
