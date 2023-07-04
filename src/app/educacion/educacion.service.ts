import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  private apiUrl = 'http://localhost:8080'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getEducacion(): Observable<any> {
    const url = `${this.apiUrl}/educacion`;
    return this.http.get(url);
  }

  actualizarEducacion(datos: any): Observable<any> {
    const url = `${this.apiUrl}/educacion`;
    return this.http.post(url, datos);
  }

  eliminarEducacion(id: number): Observable<any> {
    const url = `${this.apiUrl}/educacion/${id}`;
    return this.http.delete(url);
  }
}
