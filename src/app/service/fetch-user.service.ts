import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../user-profile';
import {RepoList} from '../repo-list';



@Injectable({
  providedIn: 'root'
})
export class FetchUserService {

  token: string = environment.apiKey;
  userUrl: string = 'https://api.github.com/search/users?q=';
  repoUrl: string = 'https://api.github.com/search/repositories?q='
  pages: string = '&per_page=20'
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
      let completeUserUrl = this.userUrl+search+this.pages+this.token
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
      let completeRepoUrl= this.repoUrl+term+this.pages+this.token
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

