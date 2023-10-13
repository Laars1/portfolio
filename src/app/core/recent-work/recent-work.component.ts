import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/shared/services/github.service';
import { Octokit } from '@octokit/rest';
import { IGithubProject } from 'src/app/shared/dtos/github-project';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss'],
})
export class RecentWorkComponent implements OnInit {
  data: IGithubProject[] = [];
  constructor(private githubService: GithubApiService) {}

  async ngOnInit() {
    this.githubService.getReposFromUser('laars1').then((x) => {
      this.data = x
    });
  }
}
