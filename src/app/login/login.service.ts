import { EditService } from '../edit.service';
import { ToastService } from 'angular-toastify';
import { Injectable } from '@angular/core';
import { Alertas } from '../utilidades';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginMode = false;
  private isModalOpen = false;

  constructor(private editService: EditService, private alerts: ToastService) {}

  get loginStatus(): boolean {
    return this.loginMode;
  }

  get modalStatus(): boolean {
    return this.isModalOpen;
  }

  toggleModalMode(): void {
    this.isModalOpen
      ? (document.body.style.overflow = 'auto')
      : (document.body.style.overflow = 'hidden');
    this.isModalOpen = !this.isModalOpen;
  }

  toggleLoginMode(user: string = '', password: string = ''): void {
    this.loginStatus ? this.cerarSesion() : this.login(user, password);
    this.toggleEdit();
  }

  login(user: string, password: string): void {
    if (user === 'admin' && password === '123') {
      this.loginMode = true;
      this.toggleModalMode();
      return this.alerts.success(Alertas.iniciarSesion);
    }
    this.alerts.error(Alertas.errorSesion);
  }

  cerarSesion(): void {
    this.loginMode = false;
    this.editService.disableEditMode();
    this.alerts.success(Alertas.cerrarSesion);
  }

  toggleEdit(): void {
    if (this.isModalOpen) {
      document.body.style.overflow = 'auto';
      this.isModalOpen = false;
      return;
    }
    this.isModalOpen = true;
    this.editService.disableEditMode();
    document.body.style.overflow = 'hidden';
  }

  contrasenaOlvidada(): void {
    this.alerts.warn(Alertas.contrasenaOlvidada);
  }
}
