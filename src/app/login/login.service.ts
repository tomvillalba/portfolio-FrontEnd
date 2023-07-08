import { Injectable } from '@angular/core';
import { EditService } from '../edit.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginMode = false;
  private isModalOpen = false;

  constructor(private editService: EditService) {}

  get loginStatus(): boolean {
    return this.loginMode;
  }

  get modalStatus(): boolean {
    return this.isModalOpen;
  }

  toggleModalMode(): void {
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
      return alert('Bienvenido');
    }
    alert('Usuario o contraseña incorrectos');
  }

  cerarSesion(): void {
    this.loginMode = false;
    this.editService.disableEditMode();
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
}
