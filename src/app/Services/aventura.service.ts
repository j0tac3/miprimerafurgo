import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AventuraModel } from '../models/aventura.model';

@Injectable({
  providedIn: 'root'
})
export class AventuraService {

  private url = 'https://mi-primera-furgo-api.herokuapp.com/api/aventura';

  constructor(private http: HttpClient) { }

  createAventura( aventura: AventuraModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(aventura);
    return this.http.post<AventuraModel>(this.url, body, {'headers': headers});
  }

  updateAventura( aventura: AventuraModel): Observable<AventuraModel> {
    return this.http.put<AventuraModel>(`${this.url}/${aventura.id}`, aventura);
  }

  getAventura(): Observable<AventuraModel[]> {
    return this.http.get<AventuraModel[]>(`${this.url}`);
  }

  deleteAventura(aventura: AventuraModel): Observable<any> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(aventura.id);
    return this.http.delete<AventuraModel>(`${this.url}/${aventura.id}`, {'headers': headers})
  }
}
