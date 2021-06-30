import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AventuraModel } from 'src/app/models/aventura.model';
import { ElementAventuraModel } from 'src/app/models/elementAventura.model';
import { UserModel } from 'src/app/models/user.model';
import { AventuraService } from './../../../Services/aventura.service'

@Component({
  selector: 'app-post-selected',
  templateUrl: './post-selected.component.html',
  styleUrls: ['./post-selected.component.css']
})
export class PostSelectedComponent implements OnInit {
  public aventura = new AventuraModel();
  public user = new UserModel();
  public elements: ElementAventuraModel[] = [];
  public adventure_id? : number;

  public showButtonToUp! : boolean;

  constructor(  private route: ActivatedRoute,
                private aventuraService : AventuraService,
                private elementRef : ElementRef) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe( params => {
      if (params.id){
        this.adventure_id = params.id;
        this.getAventura();
      }
    });

    //window.addEventListener('scroll', this.onScroll, true);
  }

  getAventura(){
    console.log(`Leyendo los datos de la aventura ${this.adventure_id} desde el servicio ....`);
      this.aventuraService.getAventuraSelected(this.adventure_id)
      .subscribe( resp => {
        this.aventura = resp['data'];
        this.elements = resp['data'].elementos;
        this.user = resp['data'].user;
        console.log(this.elements);
        for (let element of this.elements) {
          this.publicarElemento(element);
        }
      });
  }

  publicarElemento( element : ElementAventuraModel ) {
    let contenedor = this.elementRef.nativeElement.querySelector('#container-elements');
    if (element.element === 'h1') {
      contenedor.insertAdjacentHTML('beforeend', `<h1>${element.value}</h1>`);
    } else if (element.element === 'h2') {
      contenedor.insertAdjacentHTML('beforeend', `<h2 style="text-align: left;">${element.value}</h2>`);
    } else if (element.element === 'p') {
      contenedor.insertAdjacentHTML('beforeend', `<p style="text-align: left;">${element.value}</p>`);
    } else if (element.element === 'img') {
      contenedor.insertAdjacentHTML('beforeend', `<img src="${element.value}" class="post-image" style="max-width: 40rem;">`);
    }
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
