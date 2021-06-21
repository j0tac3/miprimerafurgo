import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-camperizacion',
  templateUrl: './camperizacion.component.html',
  styleUrls: ['./camperizacion.component.css']
})
export class CamperizacionComponent implements OnInit {
  public subOptionsTextVisible : boolean = false;
  public subOptionsMediaVisible : boolean = false;

  public htmlToAdd = [
    {
      'id' : 1,
      'elemento' : 'h1',
      'value' : 'Prueba de titulo'
    },
    {
      'id' : 2,
      'elemento' : 'h2',
      'value' : 'Prueba de subtitulo'
    },
    {
      'id' : 3,
      'elemento' : 'p',
      'value' : 'Esto es un texto del tipo parrafo'
    }
  ]

  constructor( private elementRef : ElementRef ) { }

  ngOnInit(): void {
    this.addElements();
  }

  showSuboption( suboptionName : string) : void {
    if (suboptionName === 'texto') {
      this.subOptionsTextVisible = !this.subOptionsTextVisible;
      this.subOptionsMediaVisible = false;
    } else if (suboptionName === 'media'){
      this.subOptionsMediaVisible = !this.subOptionsMediaVisible;
      this.subOptionsTextVisible = false;
    }
  }

  addElements() {
    let contenedor = this.elementRef.nativeElement.querySelector('.container-elements');
    for (const elemeto of this.htmlToAdd) {
      if (elemeto.elemento === 'h1') {
        contenedor.insertAdjacentHTML('afterbegin', '<h1>{{ elemento.value }}</h1>');
      } else if (elemeto.elemento === 'h2') {
        contenedor.insertAdjacentHTML('afterbegin', '<h2>{{ elemento.value }}</h2>');
      } else if (elemeto.elemento === 'p') {
        contenedor.insertAdjacentHTML('afterbegin', '<p>{{ elemento.value }}</p>');
      }
    }
  }

}
