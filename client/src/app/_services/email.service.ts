import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { SendEmailToAdminDto } from '../models/email/send-email-to-admin-dto';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
    apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendToAdmin(dto: SendEmailToAdminDto){
    return this.http.post(this.apiUrl + "email/send", dto);
  }
}
