import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageModel, MessageResponse, City } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:4001';

  constructor(private http: HttpClient) {}

  sendMessages(messages: MessageModel[]): Observable<MessageResponse[]>  {
    return this.http.post<MessageResponse[]>(`${this.apiUrl}/message`, messages);
  }

  getMessage(id: string): Observable<MessageModel> {
    return this.http.get<MessageModel>(`${this.apiUrl}/message/${id}`);
  }

  getCity(name: string): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/city`, {
      params: {
        name
      }
    })
  }
}
