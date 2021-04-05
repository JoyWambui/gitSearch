import { Component, OnInit } from '@angular/core';
import {FetchUserService} from '../service/fetch-user.service';
import {RepoList} from '../repo-list';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repoResult!: RepoList;

  fetchRepo(repo: HTMLInputElement){
   this.service.getRepo(`${repo.value}`);

  }
  constructor(public service:FetchUserService) { }
  

  ngOnInit(): void {
    this.repoResult = this.service.repoResult

  }

}
