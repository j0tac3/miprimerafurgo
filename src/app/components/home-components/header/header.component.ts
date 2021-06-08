import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentRoute : string = 'home';
  public subscription: Subscription;

  constructor( private route : Router ) { 
    this.subscription = this.route.events.subscribe((newUrl : any) => {
      try {
        if (newUrl instanceof NavigationEnd) {
        console.log(newUrl.url);
        //if (newUrl.url.includes('home') || newUrl.url === '/') {
        if (newUrl.url.includes('aventuras/')){
          this.currentRoute = 'postSelected';
          } else {
            this.currentRoute = 'notPost';
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
