import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import SampleJson from '../../assets/Posts.json';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor( private http : HttpClient) { }

  getJsonContent(){
    return this.http.get('../../assets/Posts.json');
  }

  getJson() {
    return SampleJson;
  }
}
