import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-popular-list',
  templateUrl: './most-popular-list.component.html',
  styleUrls: ['./most-popular-list.component.css']
})
export class MostPopularListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  next_Image() {
    console.log('Siguiente Imagen');
  }

  previous_Image() {
    console.log('Anterior Imagen');
  }
}
