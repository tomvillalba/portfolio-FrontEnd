import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiUrl from '../api';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  apiUrl = apiUrl;
  section = '';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const url = `${this.apiUrl}/${this.section}`;
    return this.http.get(url);
  }

  updateData(data: any): Observable<any> {
    const url = `${this.apiUrl}/${this.section}`;
    return this.http.post(url, data);
  }

  deleteData(id: number): Observable<any> {
    const url = `${this.apiUrl}/${this.section}/${id}`;
    return this.http.delete(url);
  }
}
