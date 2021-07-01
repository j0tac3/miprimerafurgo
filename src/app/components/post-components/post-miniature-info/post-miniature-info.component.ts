import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-miniature-info',
  templateUrl: './post-miniature-info.component.html',
  styleUrls: ['./post-miniature-info.component.css']
})
export class PostMiniatureInfoComponent implements OnInit {
  @Input() views? : number;
  @Input() timeAgo? : string;
  @Input() comments? : number;
  @Input() created_at? : Date;
  
  public comentsIcon: string = 'assets/media/icons/coments.svg';
  public viewsIcon: string = 'assets/media/icons/view.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
