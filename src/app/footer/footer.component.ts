import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  copiarMail() {
    navigator.clipboard.writeText('totovillalba.tv@gmail.com');
    this.alerts.success('Copiado al portapapeles');
  }

  constructor(private alerts: ToastService) {}
}
