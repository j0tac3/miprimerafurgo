import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css']
})
export class PostSelectedComponent implements OnInit {
  @HostListener("scroll", ['$event'])
  detectedScroll($event : Event){
    let scrollOffset = $event;
    console.log('scroll: ', scrollOffset);
  }

  constructor( private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
    const index = this.route.snapshot.paramMap.get('id');
  }

}
