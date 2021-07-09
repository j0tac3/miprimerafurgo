import { Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public articulos : any = ['https://rcm-eu.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=miprimerafurg-21&m=amazon&o=30&p=8&l=as1&IS1=1&asins=B07MQBGCLF&linkId=b7118fa76bc622117a477805d0044de1&bc1=ffffff&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                            'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=miprimerafurg-21&m=amazon&o=30&p=8&l=as1&IS1=1&asins=B000Y854WC&linkId=ee9134d2c31bea75e2b78c41448743cd&bc1=000000&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                            'https://rcm-eu.amazon-adsystem.com/e/cm?ref=tf_til&t=miprimerafurg-21&m=amazon&o=30&p=8&l=as1&IS1=1&npa=1&asins=B08SBKK1MD&linkId=0caf2058248cfed314e6247d3bb61b9b&bc1=000000&amp;lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr'
                          ];
  public formArticulos!: FormGroup;
  public themes = [{'desc':'Viajes'}, {'desc':'Playa'}, {'desc':'Montaña'}, {'desc':'Verano'}, {'desc':'Escapada'}];
  public themesSelected : any;

  public iframes : any = [];

  constructor(  private fb : FormBuilder,
                private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.formArticulos = this.fb.group({
      articulo: ['', Validators.required]
    })
  }

  insertarArticulo() {
    //console.log(this.formArticulos.get('articulo')?.value);
    let newArticulo : string = this.formArticulos.get('articulo')?.value;
    if (newArticulo.length > 0){
      let urlFromIframe = newArticulo.substring(newArticulo.indexOf("https"), newArticulo.lastIndexOf('"'));
      console.log('URL DEL ARTICULO: ' + urlFromIframe);
      //this.articulos.push(newArticulo);
      this.articulos.push(urlFromIframe);
      console.log(this.articulos);
      this.formArticulos.get('articulo')?.reset();
    }
  }

  cargarArticulo(articulo : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(articulo)
  }

  displayMaches( event : any) {
    const wordToSearch = event.target.value;
    if (wordToSearch.length > 0) {
      if(wordToSearch === '*'){
        this.themesSelected = this.themes;
      }else {
        const matchedArray = this.shearchTheme(wordToSearch, this.themes);
      }
    } else {
      this.themesSelected = [];
    }
  }

  shearchTheme( wordToSearch : string , themes : object) {
    //return this.themes.filter( theme => {
    this.themesSelected = this.themes.filter( theme => {
      const regex = new RegExp(wordToSearch, 'gi');
      return theme.desc.match(regex);
    })
  }

  articuoFocusOut( event : any ) {
    this.themesSelected = [];
  }

  seleccionarTema( tema : string ) {
    console.log(tema);
    this.formArticulos.get('articulo')?.setValue(tema);
    this.themesSelected = [];
  }

  textChange( text : any){
    console.log('Buscando : ' + text);
    let iframes = document.getElementsByClassName('iframe');
    console.log(iframes);
  }

  onLoadIframe( iframe : any){
    console.log('Buscando');
    console.log(iframe);
    let value = iframe.contentWindow.document.querySelectorAll('div.title');
    console.log(value);
    this.iframes.push(iframe);
    console.log(this.iframes);
  }
}
