import { Component, OnInit } from '@angular/core';
import {User} from './user.model';
import {user} from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: user[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.userservice.getUsers()
      .subscribe(user => this.users = user); 

  }

}
