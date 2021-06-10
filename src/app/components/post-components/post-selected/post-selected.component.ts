import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css']
})
export class PostSelectedComponent implements OnInit {
  public posts = [
    {
      imageURL: 'assets/media/img/furgo_bicis.jpg',
      title: 'Mi primera aventura',
    },
    {
      imageURL: 'assets/media/img/vistas_furgo.jpg',
      title: 'Ecapada con la Furgo',
    },
    {
      imageURL: 'assets/media/img/furgo_perro.jpg',
      title: 'Paseo por los rios',
    }
  ];
  public currentPost!: any;
  public showButtonToUp! : boolean;

  constructor( private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
    let index = this.route.snapshot.paramMap.get('id');
    let currentIndex = index !== null ? index : '0'
    this.currentPost = this.posts[Number.parseInt(currentIndex, 10)];
    console.log(window.scrollX);
    console.log(window.scrollY);
    //window.addEventListener('scroll', this.onScroll, true);
  }

  ngOnDestroy(): void {
    //window.removeEventListener('scroll', this.onScroll, true);
  }

  toUp(){
    if (window.scrollY > 0){
      window.scrollTo(0, 0);
      console.log("Subiendo....");
      this.showButtonToUp = false;
    }
  }

  onScroll(event: Event) {
    if (window.scrollY >= 220) {
      this.showButtonToUp = true;
      console.log('Top: ' + window.scrollY);
  } else{
      this.showButtonToUp = false;
    }
  }

}
