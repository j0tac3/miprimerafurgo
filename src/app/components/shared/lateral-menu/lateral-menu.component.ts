import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.css']
})
export class LateralMenuComponent implements OnInit {
  public currentRoute : string = 'home';
  public subscription: Subscription;
  public showMenu: boolean = false;

  constructor( private route : Router ) { 
    this.subscription = this.route.events.subscribe((newUrl : any) => {
      try {
        if (newUrl instanceof NavigationEnd) {
        console.log(newUrl.url);
        if (newUrl.url.includes('home') || newUrl.url === '/') {
          this.currentRoute = 'inicio';
          } else {
            this.currentRoute = 'notInicio';
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

  openCloseMenu() : any {
    this.showMenu = !this.showMenu;
  }

}
