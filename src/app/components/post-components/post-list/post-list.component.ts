import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts = [
    {
      imageURL: 'assets/media/img/furgo_bicis.jpg',
      title: 'Mi primera aventura',
    },
    {
      imageURL: 'assets/media/img/vistas_furgo.jpg',
      title: 'Ecapada con la Furgo',
    },
    {
      imageURL: 'assets/media/img/furgo_perro.jpg',
      title: 'Paseo por los rios',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
