import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

saveformdata(data:any){

  var dataa = JSON.stringify({'data':data})

  return this.http.post('http://localhost/laravel-jwt/public/api/logintest', dataa, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  });
}
}
