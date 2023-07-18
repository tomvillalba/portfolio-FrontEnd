import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio-FrontEnd';
  alerts = inject(ToastService);
  http = inject(HttpClient);
  constructor(private loading: LoaderService) {
    this.loading.setLoading(true);
  }
}
