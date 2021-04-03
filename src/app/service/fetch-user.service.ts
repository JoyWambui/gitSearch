import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {
  token: string = environment.apiKey;
  users: Object[];
  userUrl: string= 'https://api.github.com/users'

  constructor(private http: HttpClient) {
    this.users =[];
   }

  fetchUsers(search:string){
    let promise = new Promise<void> ((resolve, reject)=>{
      let completeUrl = `${this.userUrl}/${search}?access_token=${this.token}`
      this.http.get(completeUrl)
      .toPromise()
      .then(
        response => {
          console.log(response.search);
          resolve();
        }
      );
    });
  return promise  
  }
}

