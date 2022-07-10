import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Post } from '../model/post';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.scss']
})
export class CreatepostComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    userId: new FormControl('', [Validators.required])
  });

  get title() {
    return this.postForm.get('title');
  }

  get body() {
    return this.postForm.get('body');
  }

  get userId() {
    return this.postForm.get('userId');
  }

  constructor(private postSvs: PostsService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.postForm.value);

    let postObj: Post = {
      title: this.postForm.value.title!,
      body: this.postForm.value.body!,
      userId: +this.postForm.value.userId!
    };

    this.postSvs.createPost(postObj).subscribe((response) => {
      console.log(response);
      this.router.navigateByUrl('/posts')
    })
  }

}
