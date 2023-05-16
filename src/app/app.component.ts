import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio-FrontEnd';

  constructor(private http: HttpClient, private appService: AppService) {}
}
