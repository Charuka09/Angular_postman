import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor( private http: HttpClient) { }

  /*sends get request and  returns its reponse data*/
  getHotelData() {
      return this.http
        .get('https://my-json-server.typicode.com/nir099/angularSession3/markers');
  }
}
