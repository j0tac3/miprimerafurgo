import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camperizacion',
  templateUrl: './camperizacion.component.html',
  styleUrls: ['./camperizacion.component.css']
})
export class CamperizacionComponent implements OnInit {
public temas = ['Sugerencia', 'Fallo en Diseño', 'Error de funcionamiento', 'Otros'];

  constructor() { }

  ngOnInit(): void {
  }

}
