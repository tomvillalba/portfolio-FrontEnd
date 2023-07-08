import { Component } from '@angular/core';
import { EditService } from '../edit.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private editService: EditService,
    private loginService: LoginService
  ) {}

  editMode(): boolean {
    return this.editService.editMode;
  }

  toggleLoginMode(): void {
    this.loginService.toggleLoginMode();
  }

  closeModal(): void {
    this.loginService.toggleModalMode();
  }

  loginStatus(): boolean {
    return this.loginService.modalStatus;
  }

  login(user: string, password: string) {
    this.loginService.login(user, password);
  }

  contrasenaOlvidada(): void {
    this.loginService.contrasenaOlvidada();
  }
}
