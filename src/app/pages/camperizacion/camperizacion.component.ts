import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-camperizacion',
  templateUrl: './camperizacion.component.html',
  styleUrls: ['./camperizacion.component.css']
})
export class CamperizacionComponent implements OnInit {
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
