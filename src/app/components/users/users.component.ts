import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  userPostId: number;
  posts: Post[];

  constructor(private userService: UserService, private postService: PostService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.postService.getPostByUserId(this.userPostId).subscribe(value => this.posts = value);
  }
    getUserPost(user: User): void {
      this.userPostId = user.id;
    }


}
