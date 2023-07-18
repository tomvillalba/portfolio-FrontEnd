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
  alertApi = false;
  constructor(private loaderService: LoaderService) {
    document.body.style.overflow = 'hidden';
  }

  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

    setTimeout(() => {
      this.alertApi = true;
    }, 20000);
  }
}
