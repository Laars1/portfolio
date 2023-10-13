import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environments';
import { Octokit } from '@octokit/rest';
import { IGithubProject } from '../dtos/github-project';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  private readonly baseApiUrl = environment.baseUrl;
  errorMsg = 'An error occured, please check the console';
  octokit = new Octokit();

  constructor(private httpClient: HttpClient) {}
  public async getReposFromUser(userName: string) {
    return await this.octokit
      .request('GET /users/{owner}/repos', {
        owner: userName,
      })
      .then((x) => {
        return x.data.map((item: any) => {
          var asdf: IGithubProject = {
            id: item.id,
            url: item.html_url,
            description: item.description,
            fullname: item.full_name,
            tags: item.topics,
            homepage: item.homepage
          };
          return asdf;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
