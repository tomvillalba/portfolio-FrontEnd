import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import apiUrl from '../api';
import { catchError } from 'rxjs';
import { ToastService } from 'angular-toastify';
import { Alertas } from './utilidades';
import { SubirImagenesService } from './subir-imagenes/subir-imagenes.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  apiUrl = apiUrl;
  section = '';

  constructor(
    private http: HttpClient,
    private alerts: ToastService,
    private subirImagenes: SubirImagenesService
  ) {}

  getData(): Observable<any> {
    const url = `${this.apiUrl}/${this.section}`;
    return this.http.get(url).pipe(
      catchError<any, any>(() => {
        console.log(Alertas.errorRender);
        return this.alerts.error('problema con render, revisa la consola');
      })
    );
  }

  updateData(data: any): Observable<any> {
    const url = `${this.apiUrl}/${this.section}`;
    return this.http.post(url, data);
  }

  deleteData(id: number): any {
    const url = `${this.apiUrl}/${this.section}/${id}`;
    return this.http.delete(url);
  }

  subirImagen(event: any, data: any): Observable<any> | any {
    if (event.target.files.length === 0) return;
    if (!event.target.files[0].type.match('image.*'))
      return this.alerts.error('Solo puedes subir imagenes');
    if (event.target.name === 'banner_url') {
      this.subirImagenes.subirArchivo(event).then((banner_url) => {
        console.log(this.section);
        const url = `${this.apiUrl}/${this.section}`;
        this.http.post(url, { ...data, banner_url }).subscribe(() => {});
        setTimeout(() => {
          this.alerts.success('Imagen subida correctamente');
        }, 2000);
      });
    } else {
      this.subirImagenes.subirArchivo(event).then((foto_url) => {
        const url = `${this.apiUrl}/${this.section}`;
        this.http.post(url, { ...data, foto_url }).subscribe(() => {});
        setTimeout(() => {
          this.alerts.success('Imagen subida correctamente');
        }, 2000);
      });
    }
  }
}
