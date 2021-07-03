import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WoloxService {
  private url = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com';

  constructor(
    private http: HttpClient
  ) {

  }

 
  getCountry(){
    return this.http.get<any>('https://restcountries.eu/rest/v2/all',{});
  }
  

   // getGroups(){
  //   return this.http.post<any>(this.url+"api/admin/getGroups",{});
  // }
  // saveGroups(form){
  //   return this.http.post<any>(this.url+"api/admin/saveGroups",form);
  // }


}
