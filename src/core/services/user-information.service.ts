import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  private apiUrl = `${environment.apiUrl}/UserInformation`;

  constructor(private http: HttpClient) {}

  registerUserInformation(userInformation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/RegisterUserInformation`, userInformation);
  }
}
