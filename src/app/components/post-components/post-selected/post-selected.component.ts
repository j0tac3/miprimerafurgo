import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from '../../../Services/post-service.service';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css']
})
export class PostSelectedComponent implements OnInit {
  public currentPost!: any;

  @HostListener("scroll", ['$event'])
  detectedScroll($event : Event){
    let scrollOffset = $event;
    console.log('scroll: ', scrollOffset);
  }

  constructor( private route: ActivatedRoute,
                private router: Router,
                private postService : PostServiceService) { }

  ngOnInit(): void {
    let index = this.route.snapshot.paramMap.get('id');
    this.getCurrentPost(0);
    /*let currentIndex = index !== null ? index : '0';
    this.currentPost = this.posts[Number.parseInt(currentIndex, 10)]; */
  }

  getCurrentPost ( index : number) {
    this.postService.getJsonContent()
    .subscribe( resp => {

      let posts = resp;
      console.log(resp);
    })
  }

}
