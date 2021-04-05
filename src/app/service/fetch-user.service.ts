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
  userUrl: string = 'https://api.github.com/users/';
  repoUrl: string = 'https://api.github.com/search/repositories?q='
  pages: string = '&per_page=20'
  userSearch: UserProfile;
  repoResult: RepoList;
  results: any;
;

  constructor(private http: HttpClient) {
    this.userSearch = new UserProfile("","","",0,0,0,new Date)
    this.repoResult = new RepoList("","","","","",0,new Date,new Date)
    this.results =[];
  }


  fetchUsers(search: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(this.userUrl+search+'?'+this.token).toPromise().then(
        (response:any) => {
          new UserProfile(
            this.userSearch.avatar= response.avatar_url,
            this.userSearch.name= response.name,
            this.userSearch.bio= response.bio,
            this.userSearch.repos= response.public_repos,
            this.userSearch.followers= response.followers,
            this.userSearch.following= response.following,
            this.userSearch.created= response.created_at
          )
          
          

          console.log(response
            )
          resolve();
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
      let completeRepoUrl= this.repoUrl+term+this.pages+'&'+this.token
      this.http.get(completeRepoUrl).toPromise().then(
        (res:any)=>{
          this.results =res.items.map((repoResult:any)=>{
            return new RepoList(
              repoResult.owner.login,
              repoResult.owner.avatar_url,
              repoResult.name,
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

