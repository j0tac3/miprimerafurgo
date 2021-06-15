import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public articulos : any = ['https://rcm-eu.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=miprimerafurg-21&m=amazon&o=30&p=8&l=as1&IS1=1&asins=B07MQBGCLF&linkId=b7118fa76bc622117a477805d0044de1&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr'];
  public formArticulos!: FormGroup;

  constructor(  private fb : FormBuilder,
                private sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.formArticulos = this.fb.group({
      articulo: ['', Validators.required]
    })
  }

  insertarArticulo() {
    console.log(this.formArticulos.get('articulo')?.value);
    let newArticulo = this.formArticulos.get('articulo')?.value
    this.articulos.push(newArticulo);
    console.log(this.articulos);
  }

  cargarArticulo(articulo : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(articulo)
  }

}
