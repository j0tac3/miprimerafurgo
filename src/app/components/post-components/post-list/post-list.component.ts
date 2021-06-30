import { Component, OnInit } from '@angular/core';
import { AventuraModel } from 'src/app/models/aventura.model';
import { AventuraService } from 'src/app/Services/aventura.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public aventuras : AventuraModel[] = [];
  public aventurasCargadas = false;

  constructor( private aventuraService : AventuraService) { }

  ngOnInit(): void {
    this.getAventuras();
  }

  getAventuras() {
    this.aventuraService.getAventura()
    .subscribe( resp => {
     this.aventuras = resp['data'];
     console.log(this.aventuras);
     this.aventurasCargadas = true;
    })
  }

}
