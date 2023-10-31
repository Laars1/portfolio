import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';
import { IGithubProject } from '../dtos/github-project';

@Injectable({
  providedIn: 'root',
})

export class GithubApiService {
  octokit = new Octokit();

  constructor() {}
  public async getReposFromUser(userName: string) : Promise<IGithubProject[]> {
    return await this.octokit
      .request('GET /users/{owner}/repos', {
        owner: userName,
      })
      .then((x) => {
        return x.data.map((item: any) => {
          let data: IGithubProject = {
            id: item.id,
            url: item.html_url,
            description: item.description,
            fullname: item.full_name,
            tags: item.topics,
            homepage: item.homepage
          };
          return data;
        });
      })
      .catch((error) => {
        console.error(error);
        return null
      });
  }
}
