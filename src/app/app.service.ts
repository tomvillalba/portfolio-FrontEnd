import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interfaces/app.interface';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private data: Product[] = [];

  constructor(private http: HttpClient) {
    http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        console.log('peticion');
        this.data = data;
      });
  }

  get products() {
    return this.data;
  }
}
