import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-miniature',
  templateUrl: './post-miniature.component.html',
  styleUrls: ['./post-miniature.component.css']
})
export class PostMiniatureComponent implements OnInit {
  @Input() imageURL!: string;
  @Input() title!: string;


  constructor() { }

  ngOnInit(): void {
  }

}
