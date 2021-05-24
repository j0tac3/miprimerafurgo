import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu-option',
  templateUrl: './main-menu-option.component.html',
  styleUrls: ['./main-menu-option.component.css']
})
export class MainMenuOptionComponent implements OnInit {
  @Input() optionIconURL!: string;
  @Input() optionTitle!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
