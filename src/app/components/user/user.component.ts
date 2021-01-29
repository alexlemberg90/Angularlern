import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../models/User';
import {EventEmitter} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  UserIdUp = new EventEmitter<User>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getUserPosts(user: User): void {
    this.UserIdUp.emit(user);
  }

  goTo(): void {
    this.router.navigate(['user/' + this.user.id + '/posts'], {relativeTo: this.activatedRoute, state: this.user});
  }
}
