import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title : string = 'mi-primera-furgo-angular';
  public isHome? : boolean;
  public subscription! : Subscription;

  constructor( private route : Router ){}

  ngOnInit(): void {
    this.checkIsHome();
  }

  onActivate(event : Event){
    window.scroll(0,0);
  }

  checkIsHome(){
    this.subscription = this.route.events.subscribe((newUrl : any) => {
      try {
        if (newUrl instanceof NavigationEnd) {
        console.log(newUrl.url);
        console.log(this.isHome);
        this.isHome = (newUrl.url.includes('home'));
        }
      } catch (e) {
        console.log(e);
      }
    });
  }
}