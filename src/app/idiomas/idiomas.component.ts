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
    this.http
      .get('https://portfolioargprograma-n7be.onrender.com/idiomas')
      .subscribe((response) => {
        this.idiomas = response as Idioma[];
      });
  }
}
