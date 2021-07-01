import { Component, Input, OnInit } from '@angular/core';
import { AventuraModel } from 'src/app/models/aventura.model';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-post-miniature',
  templateUrl: './post-miniature.component.html',
  styleUrls: ['./post-miniature.component.css']
})
export class PostMiniatureComponent implements OnInit {
  @Input() aventura! : AventuraModel;
  public user = new UserModel();

  constructor() { }

  ngOnInit(): void {
    if (this.aventura.user)
      this.user = this.aventura.user;
  }

}
