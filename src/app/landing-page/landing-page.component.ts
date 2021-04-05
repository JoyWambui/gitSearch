import { Component, OnInit } from '@angular/core';
import {MyProfileService} from '../services/my-profile.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  color = '#ED4264';
  constructor(private service: MyProfileService) { }
  details: any =[];
  repos: any = [];

  ngOnInit(): void {
    this.service.getProfile()
    .subscribe((response:any)=>{
      this.details = response;
    });
    this.service.getProfileRepos()
    .subscribe((res:any)=>{
      this.repos =res;
    });
  }

}
