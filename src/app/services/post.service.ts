import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {

  }

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postsUrl);
    console.log(this.postsUrl);
  }

  getPostByUserId(id): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.postsUrl + '?userId=' + id);
  }
}
