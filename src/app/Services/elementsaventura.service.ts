import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementAventuraModel } from '../models/elementAventura.model';

@Injectable({
  providedIn: 'root'
})
export class ElementsaventuraService {

  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/elementaventura';

  constructor(private http: HttpClient) { }

  createAventura( elements: ElementAventuraModel[]): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(elements);
    console.log(body);
    return this.http.post<ElementAventuraModel[]>(this.url, body, {'headers': headers});
  }

  updateAventura( elements: ElementAventuraModel[]): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(elements);
    console.log(body);
    return this.http.put<ElementAventuraModel[]>(`${this.url}/${elements[0].id}`, body, {'headers': headers});
  }

  getAventura(): Observable<ElementAventuraModel[]> {
    return this.http.get<ElementAventuraModel[]>(`${this.url}`);
  }

  deleteAventura(elements: ElementAventuraModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(elements.id);
    return this.http.delete<ElementAventuraModel>(`${this.url}/${elements.id}`, {'headers': headers})
  }
}
