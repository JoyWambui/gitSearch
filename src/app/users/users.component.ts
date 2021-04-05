import { Component, Input, OnInit } from '@angular/core';
import {FetchUserService} from '../service/fetch-user.service'
import {UserProfile} from '../user-profile'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userResult!: UserProfile 
  
    constructor(public service: FetchUserService) { }
    getUser(user:HTMLInputElement){
      return this.service.fetchUsers(`${user.value}`)
      
    }
  ngOnInit(): void {
    this.userResult = this.service.userResult
  }

}
