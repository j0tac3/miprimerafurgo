import { Component, Input, OnInit } from '@angular/core';
import { AventuraModel } from 'src/app/models/aventura.model';

@Component({
  selector: 'app-post-miniature',
  templateUrl: './post-miniature.component.html',
  styleUrls: ['./post-miniature.component.css']
})
export class PostMiniatureComponent implements OnInit {
  @Input() aventura! : AventuraModel;

  constructor() { }

  ngOnInit(): void {
  }

}
