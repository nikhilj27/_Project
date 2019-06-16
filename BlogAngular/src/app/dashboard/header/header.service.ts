import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private httpClient: HttpClient) {}

  AuthHeaders = { headers: new HttpHeaders({ Authorization: 'Bearer '+localStorage.getItem('token') }) };

  getUserName(): Observable<any>{
    return this.httpClient.get(environment.apiBaseUrl + '/userProfile');
  }
}
