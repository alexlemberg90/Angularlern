import { Component, OnInit } from '@angular/core';
import {users} from '../../data/usersArr';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  users: any[] = users;

  constructor() { }

  ngOnInit(): void {
  }

}
