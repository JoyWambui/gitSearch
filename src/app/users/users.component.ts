import { Component, OnInit } from '@angular/core';
import {FetchUserService} from '../service/fetch-user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: FetchUserService) { }
    getUser(term:string){
      return this.userService.fetchUsers(term)
    }
  ngOnInit(): void {
  }

}
