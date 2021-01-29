import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {Post} from '../../../models/Post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  userPostId: number;
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.data.subscribe(value => this.users = value.usersData);
  }

  ngOnInit(): void {
    this.postService.getPostByUserId(this.userPostId).subscribe(value => this.posts = value);
  }
    getUserPost(user: User): void {
      this.userPostId = user.id;
    }


}
