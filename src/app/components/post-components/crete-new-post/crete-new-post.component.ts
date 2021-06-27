import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementAventura } from 'src/app/models/elementPost.model';

@Component({
  selector: 'app-crete-new-post',
  templateUrl: './crete-new-post.component.html',
  styleUrls: ['./crete-new-post.component.css']
})
export class CreteNewPostComponent implements OnInit {
  public adventure_id? : number;

  public subOptionsTextVisible : boolean = false;
  public subOptionsMediaVisible : boolean = false;
  public showInputElement : boolean = false;
  public showInputElementImage : boolean = false;

  public formNewElement!: FormGroup;
  public elementName!: string;
  public elementTag!: string;

  public imgFile! : string;
  public elements: ElementAventura[] = [];

  constructor(  private elementRef : ElementRef,
                private fb: FormBuilder,
                private route : ActivatedRoute ) { }

  ngOnInit(): void {
     this.route.queryParams
    .subscribe( params => {
      console.log(params);
      if (params.id){
        this.adventure_id = params.id;
      }
    });

    this.createOrEditAdventura();
    this.formInit();
  }

  createOrEditAdventura(){
    if (this.checkIfNewAdventure()){
      //Crear un nuevo array para guardar los elementos de la nueva aventura
      console.log('Se va a crear una nueva aventura.');
    } else {
      //Usar el servicio para recoger los elementos de la aventura desde la BDD
      console.log(`Leyendo los datos de la aventura ${this.adventure_id} desde el servicio ....`);
    }
  }

  addElements() {
    if (this.checkIfNewAdventure()){
      //LLamar al servicio para que cree una nueva aventura en la BDD
      console.log('Creando una nueva Aventura ...')
    } else {
      //LLamar al servicio para que edite la aventura en la BDD
      console.log(`Editando la aventura ${this.adventure_id} ...`)
    }
    /* for (const element of this.elements) {
      this.publicarElemento(element);
    } */
  }

  checkIfNewAdventure(){
    return (this.adventure_id === undefined || this.adventure_id === null);
  }

  formInit(){
    this.formNewElement = this.fb.group({
      element: ['', Validators.required],
      elementImage: ['', Validators.required],
    })
  }

  showSuboption( suboptionName : string) : void {
    if (suboptionName === 'texto') {
      this.subOptionsTextVisible = !this.subOptionsTextVisible;
      if (this.subOptionsMediaVisible) { this.subOptionsMediaVisible = false };
      if (this.showInputElementImage) { this.showInputElementImage = false };
    } else if (suboptionName === 'media'){
      this.subOptionsMediaVisible = !this.subOptionsMediaVisible;
      if (this.subOptionsTextVisible) { this.subOptionsTextVisible = false };
      if (this.showInputElement) { this.showInputElement = false };
    }
  }

  publicarElemento( element : ElementAventura ) {
    let contenedor = this.elementRef.nativeElement.querySelector('.container-elements');
    if (element.element === 'h1') {
      contenedor.insertAdjacentHTML('beforeend', `<h1>${element.value}</h1>`);
    } else if (element.element === 'h2') {
      contenedor.insertAdjacentHTML('beforeend', `<h2 style="text-align: left;">${element.value}</h2>`);
    } else if (element.element === 'p') {
      contenedor.insertAdjacentHTML('beforeend', `<p style="text-align: left;">${element.value}</p>`);
    } else if (element.element === 'img') {
      contenedor.insertAdjacentHTML('beforeend', `<img src="${element.value}" class="post-image" style="1111111111max-width: 40rem;">`);
    }
  }

  addElement( element : ElementAventura) {
    this.elements.push(element);
    console.log(this.elements);
    this.publicarElemento(element);
  }

  showInputElemenToAdd( tag : string ) {
      this.elementName = tag;
      switch (this.elementName) {
        case 'h1':
        case 'h2':
        case 'p':
          this.formNewElement.get('element')?.reset();
          this.showInputElement = true;
          this.setElementTag(this.elementName);
          break;
        case 'img':
          this.formNewElement.get('elementImage')?.reset();
          this.showInputElementImage = true;
          this.setElementTag(this.elementName);
          break;
        default:
          break;
      }
  }

  setElementTag( elementName : string) {
    if (elementName === 'h1') {
      this.elementTag = 'Titulo';
    } else if (elementName === 'h2') {
      this.elementTag = 'Subtitulo';
    } else if (elementName === 'ul') {
        this.elementTag = 'Lista';
    } else if (elementName === 'p') {
      this.elementTag = 'Párrafo';
    }if (elementName === 'img') {
      this.elementTag = 'Imagen';
    }
  }
    
  guardarElemento(){
    let element = this.showInputElement ? this.formNewElement.get('element')?.value : this.getImageValue();
    const elementToAdd = new ElementAventura();
    elementToAdd.element = this.elementName;
    elementToAdd.value = element;
    this.addElement(elementToAdd);
    
    this.closeInputElement();
  }

  getImageValue(){
    return this.imgFile;
  }

  onImageChange(e : any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imgFile = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  closeInputElement() {
    let isText = this.comprobarSiElementoTexto(this.elementName);
    this.showHiddenInputs(isText);
  }

  comprobarSiElementoTexto( elementName : string ){
    return ['h1', 'h2', 'p'].includes(elementName);
  }

  showHiddenInputs(isText : boolean) {
    if (isText) {
      this.formNewElement.get('element')?.reset()
      this.showInputElement = !this.showInputElement;
    } else {
      this.formNewElement.get('elementImage')?.reset()
      this.showInputElementImage = !this.showInputElementImage;
    }
  }
}
