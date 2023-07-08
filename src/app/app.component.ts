import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio-FrontEnd';
  alerts = inject(ToastService);
  http = inject(HttpClient);
}
