import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
})
export class InformacionPersonalComponent {
  constructor(private appService: AppService) {}
  get products() {
    return this.appService.products;
  }
}
