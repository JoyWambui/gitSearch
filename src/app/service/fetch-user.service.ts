import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod'
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../user-profile';
import {RepoList} from '../repo-list';



@Injectable({
  providedIn: 'root'
})
export class FetchUserService {

  userResult: UserProfile;
  repoResult: RepoList;
  results: any;
  repoResults: any;
;

  constructor(private http: HttpClient) {
    this.userResult = new UserProfile("","",0,"")
    this.repoResult = new RepoList("","","","","","",0,new Date,new Date)
    this.results =[];
    this.repoResults =[];
  }


  fetchUsers(search: string) {
    let promise = new Promise<void>((resolve, reject) => {
      let completeUserUrl = `https://api.github.com/search/users?q=${search}&per_page=20&access_token=${environment.apiKey}`
      this.http.get(completeUserUrl).toPromise().then(
        (res:any) => {
          this.results= res.items.map((userResult:any)=>{
            return new UserProfile(
              userResult.avatar_url,
              userResult.login,
              userResult.id,
              userResult.html_url,
            )
  
          });
          resolve();

          console.log(res.items
            )
        },
        err =>{
          reject(err);
        }
      );
    });
    return promise
  }
  getRepo(term:string){
    let promise = new Promise<void>((resolve, reject)=>{
      let completeRepoUrl= `https://api.github.com/search/repositories?q=${term}&per_page=20&access_token=${environment.apiKey}`
      this.http.get(completeRepoUrl).toPromise().then(
        (res:any)=>{
          this.repoResults =res.items.map((repoResult:any)=>{
            return new RepoList(
              repoResult.owner.login,
              repoResult.owner.avatar_url,
              repoResult.name,
              repoResult.html_url,
              repoResult.description,
              repoResult.language,
              repoResult.forks,
              repoResult.created_at,
              repoResult.updated_at
          )
          })
          
          resolve()
          console.log(res);
          
        },
        err=>{
          reject(err)
        }
      )
    });
    return promise;
  } 
}

