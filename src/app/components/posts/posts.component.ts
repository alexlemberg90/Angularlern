import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../models/Post';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  user: User;
  // posts: Post[];
  userPosts: Post[];

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
    this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {

    // this.postService.getPost().subscribe(value => this.posts = value);
    this.postService.getPostByUserId(this.user.id).subscribe(value => this.userPosts = value);

  }

}
