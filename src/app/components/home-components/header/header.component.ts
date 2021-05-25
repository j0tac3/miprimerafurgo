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

  constructor( private route : Router) { 
    this.subscription = this.route.events.subscribe(newUrl => {
      try {
        if (newUrl instanceof NavigationEnd && newUrl.url.includes('home')) {
          this.currentRoute = 'inicio';
        }
      } catch (e) {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
  }

  isHomeDirectory() : any{
    console.log(this.route.url);
    return this.route.url;
  }

}
