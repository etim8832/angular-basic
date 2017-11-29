import { Component, OnInit } from '@angular/core';
import User from './user.model';
import {UserService} from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  data = [
    new User(1,'etim','sasuke','https://vignette.wikia.nocookie.net/peanuts/images/0/02/Peanuts_Movie_Snoopy_Poster.png/revision/latest?cb=20151022163122'),
    new User(2,'etimone','sasukeone','https://images.genius.com/491bf25ab99b3c1c6ad49a506115bff6.900x559x1.jpg')
  ]

  constructor(private userservice:UserService) { }

  ngOnInit() {

  }

}
