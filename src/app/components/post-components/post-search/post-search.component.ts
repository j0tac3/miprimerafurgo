import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent implements OnInit {
  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onTextChange(event : any){
    let text = event.target.value;
    this.textChange.emit(text);
  }

}
