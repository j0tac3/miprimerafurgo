import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public temas = ['Sugerencia', 'Fallo en Diseño', 'Error de funcionamiento', 'Otros'];
  public formContacto! : FormGroup;

  constructor( private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.formContacto = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      tema: ['', Validators.required],
      observacion: ['', Validators.required]
    })
  }

}
