import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})

export class PostListComponentComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  like: number = 0 ;
  dislike: number = 0 ;
  datePost = new Promise((resolve, reject) => {
    const create_date = new Date();
    setTimeout(
      () => {
        resolve(create_date);
      }, 200
    );
  });

  countLike() {
    this.like++;
    console.log(this.like);
  }
  writeLike() {
    return this.like;
  }
  countDislike() {
    this.dislike++;
    console.log(this.dislike);
  }
  writeDislike() {
    return this.dislike;
  }
  likeIt() {
    if (this.like > this.dislike) {
      return '#5cb85c';
    } else if (this.like < this.dislike){
      return '#d9534f';
    } else {
      return '#fff';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
