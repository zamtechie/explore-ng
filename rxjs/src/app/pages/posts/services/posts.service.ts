import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { EndpointService } from 'src/app/service/endpoint.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private epService: EndpointService) { }

  getPosts(): Observable<Post[]> {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.epService.get(url);
  }

  createPost(payload: Post): Observable<Post> {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.epService.post(url, payload);
  }

  deletePost(id: number): Observable<Post> {
    let url = 'https://jsonplaceholder.typicode.com/posts/'+id;
    return this.epService.delete(url);
  }
}
