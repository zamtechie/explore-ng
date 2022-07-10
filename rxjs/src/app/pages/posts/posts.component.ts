import { Component, OnInit } from '@angular/core';
import { Post } from './model/post';
import { PostsService } from './services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  //let post: Post = null;
  posts: Post[] = []
  constructor(private postSvc: PostsService, private route: Router) {

  }

  ngOnInit(): void {
    this.postSvc.getPosts().subscribe(response => {
      this.posts = response;
    });
  }

  editClicked(id?: number) {
    console.log('editClicked:', id);
  }

  deleteClicked(id?: number) {
    console.log('deleteClicked:', id);
    this.postSvc.deletePost(id!).subscribe(response => {
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }

  createPostClicked() {
    console.log('createPostClicked')
    this.route.navigateByUrl('posts/create');
  }
}
