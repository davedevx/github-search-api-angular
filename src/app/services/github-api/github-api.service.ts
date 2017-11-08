import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const SEARCH_ITEMS_PER_PAGE = 1000;
const ISSUES_ITEMS_PER_PAGE = 100;

@Injectable()
export class GithubApiService {
  constructor(private _http: HttpClient) { }

  public searchRepositoriesByName(name: string): Observable<Object> {
    const url = this._generateSearchInRepositoriesUrl(name);

    return this._http.get(url);
  }

  public getRepositoryIssues(owner: string, repo: string): Observable<Object> {
    const url: string = this._generateRepositoryIssuesUrl(owner, repo);

    return this._http.get(url);
  }

  public getRepositoryByOwnerAndRepo(owner: string, repo: string): Observable<Object> {
    const url: string = this._generateRepositoryUrl(owner, repo);

    return this._http.get(url);
  }

  private _generateSearchInRepositoriesUrl(name: string): string {
    return `https://api.github.com/search/repositories?q=${name}&per_page=${SEARCH_ITEMS_PER_PAGE}`;
  }

  private _generateRepositoryIssuesUrl(owner: string, repo: string): string {
    return `https://api.github.com/repos/${owner}/${repo}/issues?&per_page=${ISSUES_ITEMS_PER_PAGE}`;
  }

  private _generateRepositoryUrl(owner: string, repo: string) {
    return `https://api.github.com/repos/${owner}/${repo}`;
  }
}
