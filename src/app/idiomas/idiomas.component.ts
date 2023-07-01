import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Idioma } from '../interfaces';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styles: [],
})
export class IdiomasComponent {
  idiomas: Idioma[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('http://localhost:8080/idiomas').subscribe((response) => {
      this.idiomas = response as Idioma[];
    });
  }
}
