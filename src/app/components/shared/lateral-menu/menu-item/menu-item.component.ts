import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() itemLabel! : string;
  @Input() itemRoute! : string;
  @Input() iconRoute! : string;

  constructor() { }

  ngOnInit(): void {
    this.iconRoute = `assets/media/icons/${this.iconRoute}.svg`;
  }

}
