import { Component } from '@angular/core';

import { Post } from './post.interface';

import { postContent } from './post.content';

@Component({
  selector: 'gl-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  postList: Post[] = postContent;

}
