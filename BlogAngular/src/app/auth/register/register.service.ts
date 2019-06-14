import { Injectable } from '@angular/core';
import { Register } from './register.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  postuser(user: Register): Observable<any> {
    return this.httpClient.post(environment.apiBaseUrl + '/register', user);
  }
}
