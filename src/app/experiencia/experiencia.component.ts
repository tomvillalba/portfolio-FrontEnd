import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [],
})
export class ExperienciaComponent {
  constructor(private appService: AppService) {}
  get data() {
    return this.appService.products;
  }
}
