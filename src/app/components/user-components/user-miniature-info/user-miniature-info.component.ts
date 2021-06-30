import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-miniature-info',
  templateUrl: './user-miniature-info.component.html',
  styleUrls: ['./user-miniature-info.component.css']
})
export class UserMiniatureInfoComponent implements OnInit {
  @Input() user! : UserModel;
  public userImageURL: string = 'assets/media/img/batman.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
