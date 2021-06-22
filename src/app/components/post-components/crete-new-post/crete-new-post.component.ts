import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewElement } from './../../../models/newElement.model'

@Component({
  selector: 'app-crete-new-post',
  templateUrl: './crete-new-post.component.html',
  styleUrls: ['./crete-new-post.component.css']
})
export class CreteNewPostComponent implements OnInit {
  public subOptionsTextVisible : boolean = false;
  public subOptionsMediaVisible : boolean = false;
  public showInputElement : boolean = false;
  public showInputElementImage : boolean = false;

  public formNewElement!: FormGroup;
  public elementName!: string;

  public imgFile! : string;

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

  constructor( private elementRef : ElementRef,
                private fb: FormBuilder ) { }

  ngOnInit(): void {
    //this.addElements();
    this.formInit();
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
      this.subOptionsMediaVisible = false;
    } else if (suboptionName === 'media'){
      this.subOptionsMediaVisible = !this.subOptionsMediaVisible;
      this.subOptionsTextVisible = false;
    }
  }

/*   addElements() {
    console.log(this.htmlToAdd);
    let contenedor = this.elementRef.nativeElement.querySelector('.container-elements');
    for (const elemeto of this.htmlToAdd) {
      if (elemeto.elemento === 'h1') {
        contenedor.insertAdjacentHTML('beforeend', '<h1>{{ elemento.value }}</h1>');
      } else if (elemeto.elemento === 'h2') {
        contenedor.insertAdjacentHTML('beforeend', '<h2>{{ elemento.value }}</h2>');
      } else if (elemeto.elemento === 'p') {
        contenedor.insertAdjacentHTML('beforeend', '<p>{{ elemento.value }}</p>');
      }
    }
  } */

  addElement( element : NewElement) {
    console.log(element);
    let contenedor = this.elementRef.nativeElement.querySelector('.container-elements');
    if (element.element === 'h1') {
      contenedor.insertAdjacentHTML('beforeend', `<h1>${element.value}</h1>`);
    } else if (element.element === 'h2') {
      contenedor.insertAdjacentHTML('beforeend', `<h2>${element.value}</h2>`);
    } else if (element.element === 'p') {
      contenedor.insertAdjacentHTML('beforeend', `<p style="text-align: left;">${element.value}</p>`);
    } else if (element.element === 'img') {
      contenedor.insertAdjacentHTML('beforeend', `<img [src]="${element.value}" class="post-image">`);
    }
  }

  showInputElemenToAdd( elementName : string ) {
    if (elementName === this.elementName) {
        this.closeInputElement();
    } else {
      this.elementName = elementName;
      switch (elementName) {
        case 'h1':
        case 'h2':
        case 'p':
          this.formNewElement.get('element')?.reset();
          this.showInputElement = true;
          break;
      case 'img':
        this.formNewElement.get('elementImage')?.reset();
        this.showInputElementImage = true;
        break;

        default:
          break;
      }
    }
  }
    
  guardarElemento(){
    let element = this.showInputElement ? this.formNewElement.get('element')?.value : this.getImageValue();
    const elementToAdd = new NewElement(this.elementName, element);
    this.addElement(elementToAdd);
    
    this.closeInputElement();
  }

  getImageValue(){
    return this.imgFile;
  }

  onImageChange(e : any) {
    const reader = new FileReader();
    
    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.formNewElement.patchValue({
          elementImage: reader.result as string
        });
      };
    }
  }

  closeInputElement() {
    this.comprobarSiElementoTexto(this.elementName);
  }

  comprobarSiElementoTexto( elementName : string ){
    //return ['h1', 'h2', 'p'].includes(elementName) ? true : false;
    if ( ['h1', 'h2', 'p'].includes(elementName) ){
      this.formNewElement.get('element')?.reset()
      this.showInputElement = !this.showInputElement;
    } else {
      this.formNewElement.get('elementImage')?.reset()
      this.showInputElementImage = !this.showInputElementImage;
    }
  }
}
