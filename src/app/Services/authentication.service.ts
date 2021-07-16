import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { Session } from '../models/sesion.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private http : HttpClient ) { }

  private basePath = 'https://mi-primera-furgo-api.herokuapp.com/api/';

  login( loginObj : Login) : Observable<Session> {
    const headers = { 'content-type' : 'application/json' };
    const body = JSON.stringify(loginObj);
    console.log('Iniciando sesion');
    let result = this.http.post<Session>( this.basePath + 'login' , body, {'headers': headers})
    //.pipe(map((response: any) => this.extractData(response)));
    console.log(result);
    return (result);
  }

  logout() : Observable<Session> {
    return this.http.post( this.basePath + 'logout', {});
  }

  extractData( resp : Response ){
    let body = resp.json();
    return body;
  }
}
