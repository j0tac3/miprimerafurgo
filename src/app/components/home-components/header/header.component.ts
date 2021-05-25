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
    this.subscription = this.route.events.subscribe((newUrl) => {
      try {
        if (newUrl instanceof NavigationEnd && newUrl.url.includes('home')) {
          console.log('Estas en Home')
          this.currentRoute = 'inicio';
        } else {
          this.currentRoute = 'notInicio';
          console.log('No estas en Home')
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
