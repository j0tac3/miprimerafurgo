import { Component, ElementRef, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementAventuraModel } from 'src/app/models/elementAventura.model';
import { AventuraService } from './../../../Services/aventura.service'
import { ElementsaventuraService } from './../../../Services/elementsaventura.service'
import { AventuraModel } from 'src/app/models/aventura.model';
import { Location } from '@angular/common'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crete-new-post',
  templateUrl: './crete-new-post.component.html',
  styleUrls: ['./crete-new-post.component.css']
})
export class CreteNewPostComponent implements OnInit {
  @Output() componentCargado = new EventEmitter();
  @Output() addAvntura = new EventEmitter<AventuraModel>();
  @Output() cerrarVista = new EventEmitter();
  @Input() currentAventura! : AventuraModel;

  public aventura = new AventuraModel;
  public adventure_id? : number;
  public message! : string;
  public messageconfirm! : string;
  public prevText! : string;
  public showContainer : boolean = true;

  public subOptionsTextVisible : boolean = false;
  public subOptionsMediaVisible : boolean = false;
  public showInputElement : boolean = false;
  public showInputElementImage : boolean = false;

  public formNewElement!: FormGroup;
  public elementName!: string;
  public elementTag!: string;
  public activarBtnH1 = true;

  public imgFile! : string;
  public imageName! : string;
  public elements: ElementAventuraModel[] = [];
  public elementos! : boolean;

  constructor(  private elementRef : ElementRef,
                private fb: FormBuilder,
                private route : ActivatedRoute,
                private aventuraService : AventuraService,
                private elementaventuraService : ElementsaventuraService,
                private location: Location ) { }

  ngOnInit(): void {
  /*    this.route.queryParams
    .subscribe( params => {
      console.log(params);
      if (params.id){
        this.adventure_id = params.id;
      }
    }); */

    this.createOrEditAdventura();
    this.formInit();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.onComponenteCargado();
  }

  onComponenteCargado(){
    this.componentCargado.emit();
  }

  createOrEditAdventura(){
    if (this.checkIfNewAdventure()){
      //Crear un nuevo array para guardar los elementos de la nueva aventura
      console.log('Se va a crear una nueva aventura.');
      this.currentAventura = new AventuraModel();
    } else {
      //Usar el servicio para recoger los elementos de la aventura desde la BDD
      console.log(`Leyendo los datos de la aventura ${this.currentAventura.id} desde el servicio ....`);
      this.aventuraService.getAventuraSelected(this.currentAventura.id)
      .subscribe( resp => {
        console.log(resp);
        this.elements = resp['data'].elementos;
        console.log(this.elements);
        for (let element of this.elements) {
          this.publicarElemento(element);
        }
      });
    }
  }

  addElements() {
    this.messageconfirm = "Quieres publicar la Aventura?"
  }

  publicarAventura(){
    this.aventura.publicado = true;
    this.almacenarElementos();
    this.messageconfirm = "";
  }

  almacenarElementos(){
    this.messageconfirm = "";
    this.message = "";
    if (this.checkIfNewAdventure()){
      //LLamar al servicio para que cree una nueva aventura en la BDD
      console.log('Creando una nueva Aventura ...')
      this.createAventura();
    } else {
      //LLamar al servicio para que edite la aventura en la BDD
      console.log(`Editando la aventura ${this.adventure_id} ...`)
    }
  }

  checkIfNewAdventure(){
    //return (this.adventure_id === undefined || this.adventure_id === null);
    return (this.currentAventura.id === undefined || this.currentAventura.id === null);
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

  publicarElemento( element : ElementAventuraModel ) {
    this.prevText = '';
    let contenedor = this.elementRef.nativeElement.querySelector('.container-elements');
    if (element.element === 'h1') {
      contenedor.insertAdjacentHTML('beforeend', `<h1>${element.value}</h1>`);
      this.activarBtnH1 = false;
    } else if (element.element === 'h2') {
      contenedor.insertAdjacentHTML('beforeend', `<h2 style="text-align: left;">${element.value}</h2>`);
    } else if (element.element === 'p') {
      contenedor.insertAdjacentHTML('beforeend', `<p style="text-align: left;">${element.value}</p>`);
    } else if (element.element === 'img') {
      contenedor.insertAdjacentHTML('beforeend', `<img src="${element.value}" class="post-image" style="max-width: 40rem;">`);
      this.imgFile = '';
    }
  }

  addElement( element : ElementAventuraModel) {
    this.elements.push(element);
    console.log(this.elements);
    this.publicarElemento(element);
    this.comporbarSiPublicar();
  }

  comporbarSiPublicar(){
    if (this.elements.length > 0){
      let header = this.elements.filter(element => element.element === 'h1');
      if (header.length > 0)
        this.elementos = true;
      else
        this.elementos = false;
    }
    console.log(this.elementos);
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
    const elementToAdd = new ElementAventuraModel();
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
    this.imageName = file.name;
   // console.log(this.imageName);
    const reader = new FileReader();
    reader.onload = () => {
      this.imgFile = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  closeInputElement() {
    let isText = this.comprobarSiElementoTexto(this.elementName);
    this.showHiddenInputs(isText);
    this.prevText = '';
    this.imgFile = '';
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

  createAventura() {
    if (this.elements.length > 0) {
      let aventura = this.aventura;
      aventura.user_id = 1;
      this.aventuraService.createAventura(aventura)
      .subscribe( resp => {
        this.aventura = resp['data'];
        this.aventura.titulo = this.elements[0].value;
        aventura = resp['data'];
        console.log(aventura);
        this.createElements(this.aventura);
      });
    }
  }

  createElements( aventura : AventuraModel){
    for (let element of this.elements){
      element.aventura_id = aventura.id;
    }
    //enviar los elementos a crearlos desde el servicio
    console.log(this.elements);
    this.elementaventuraService.createAventura(this.elements)
    .subscribe( resp => {
      console.log(resp);
      this.message = 'La aventura se ha creado correctamente.';
      this.aventura.elementos = this.elements;
      this.onAddAventura();
    }); 
  }

  closeModel(){
    this.message = '';
    this.messageconfirm = '';
  }

  actualizarPreText( event : any) {
    this.prevText = event.target.value;
  }

  checkIfElements(){
    return this.elements.length > 0;
  }

  cerrarVentana(){
    this.location.back();
  }

  onAddAventura() {
    this.addAvntura.emit(this.aventura);
  }

  onCerrarVista(){
    this.cerrarVista.emit();
  }
}
