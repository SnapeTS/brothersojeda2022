import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = 'https://www.brothersojeda.com/service/';

  constructor(private http: HttpClient) { }

  sendEmail(contact){
    return this.http.post(`${this.url}send_email.php`, JSON.stringify(contact));
  }
}