import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/shared/services/github.service';

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.scss']
})
export class RecentWorkComponent implements OnInit {

  constructor(private githubService: GithubApiService) { }

  ngOnInit() {
    this.githubService.getPublicReposFromUser('laars1').subscribe(x => {
      console.log(x);
    })
  }

}
