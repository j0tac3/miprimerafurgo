import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public categories = ['Playas', 'Montaña', 'Camping', 'Furgo', 'Verano'];

  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  goTo( socialName : String ) : void {
    switch (socialName) {
      case 'instagram':
        this.document.location.href = 'https://www.instagram.com';
        break;
      case 'facebook':
        this.document.location.href = 'https://www.facebook.com';
        break;
      case 'twitter':
        this.document.location.href = 'https://www.twitter.com';
        break;
      case 'youtube':
        this.document.location.href = 'https://www.youtube.com';
        break;
      case 'email':
        this.document.location.href = 'contacto';
        break;
      default:
        break;
    }
  }

}
