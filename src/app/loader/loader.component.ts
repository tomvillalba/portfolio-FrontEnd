import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = true;
  alert = true;
  alert2 = false;
  alertApi = false;
  constructor(private loaderService: LoaderService) {
    document.body.style.overflow = 'hidden';
  }

  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    setTimeout(() => {
      this.alert = false;
      this.alert2 = true;
    }, 10000);
    setTimeout(() => {
      this.alert2 = false;
      this.alertApi = true;
    }, 22000);
  }
}
