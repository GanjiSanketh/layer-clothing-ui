import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private apiUrl = environment.apiUrl; // Removed extra semicolon

  constructor(private http: HttpClient) {}

  testApiInformation(): Observable<any> {
    debugger;
    return this.http.get(`${this.apiUrl}/ProductInformation/GetActiveProductInformations`);
  }
}
