import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

token: string = environment.apiKey;
url: string = `https://api.github.com/users/joywambui?access_token=${environment.apiKey}`

  constructor(private http: HttpClient) { }

  getProfile(){
    let completeUrl = this.url+this.token;
    return this.http.get(completeUrl);
  }
  getProfileRepos(){
    let fullUrl = `https://api.github.com/users/joywambui/repos?per_page=20&access_token=${environment.apiKey}`
    return this.http.get(fullUrl);
  }
}
