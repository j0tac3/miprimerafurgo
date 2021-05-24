import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-miniature',
  templateUrl: './post-miniature.component.html',
  styleUrls: ['./post-miniature.component.css']
})
export class PostMiniatureComponent implements OnInit {
  public imageURL: string = 'assets/media/img/furgo_bicis.jpg';
  public title: string = 'Mi primera aventura';


  constructor() { }

  ngOnInit(): void {
  }

}
