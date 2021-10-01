import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Email} from "../model/email";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly emailPath = 'api/emails';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  add(email: Email): Observable<Email> {
    return this.httpClient.post<Email>(this.emailPath, email, this.httpOptions);
  }

  edit(email: Email): Observable<void> {
    const url = `${this.emailPath}/${email.id}`;
    return this.httpClient.put<void>(url, email, this.httpOptions);
  }

  getAll(contactId: number): Observable<Email[]> {
    const url = `${this.emailPath}/${contactId}/all`;
    return this.httpClient.get<Email[]>(url)
  }

  delete(emailId: number): Observable<void> {
    const url = `${this.emailPath}/${emailId}`;
    return this.httpClient.delete<void>(url);
  }
}
