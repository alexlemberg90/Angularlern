import { Component, OnInit } from '@angular/core';
import {users} from '../../data/usersArr';
import {User} from '../../models/User';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  users: User[] = users;

  constructor() { }

  ngOnInit(): void {
  }

}
