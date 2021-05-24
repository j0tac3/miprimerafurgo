import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-miniature-info',
  templateUrl: './post-miniature-info.component.html',
  styleUrls: ['./post-miniature-info.component.css']
})
export class PostMiniatureInfoComponent implements OnInit {
public comentsIcon: string = 'assets/media/icons/coments.svg';
public viewsIcon: string = 'assets/media/icons/view.svg';
public timeAgo: string = 'Hace 2 días';

  constructor() { }

  ngOnInit(): void {
  }

}
