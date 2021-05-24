import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-miniature-info',
  templateUrl: './user-miniature-info.component.html',
  styleUrls: ['./user-miniature-info.component.css']
})
export class UserMiniatureInfoComponent implements OnInit {
public userImageURL: string = 'assets/media/img/batman.jpg';
public userName: string = 'SerJota'

  constructor() { }

  ngOnInit(): void {
  }

}
