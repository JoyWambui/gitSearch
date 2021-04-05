import { Component, Input, OnInit } from '@angular/core';
import {FetchUserService} from '../service/fetch-user.service'
import {UserProfile} from '../user-profile'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userSearch!: UserProfile 
    
  
  results! : any[];
  
  
  constructor(public userService: FetchUserService) { }
    getUser(user:HTMLInputElement){
      return this.userService.fetchUsers(`${user.value}`)
      
    }
  ngOnInit(): void {
    this.userSearch = this.userService.userSearch
  }

}
