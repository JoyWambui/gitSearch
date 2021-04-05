import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../user-profile'



@Injectable({
  providedIn: 'root'
})
export class FetchUserService {

  token: string = environment.apiKey;
  userUrl: string = 'https://api.github.com/users/';
  pages: string = '&per_page=50'
  results: any[];
  userSearch: UserProfile;
;

  constructor(private http: HttpClient) {
    this.results =[];
    this.userSearch = new UserProfile("","","",0,0,0,new Date)
  }


  fetchUsers(search: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(this.userUrl+search+this.token).toPromise().then(
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
}

