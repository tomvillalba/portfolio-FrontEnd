import { Component } from '@angular/core';
import { EditService } from '../edit.service';
import { LoginService } from '../login/login.service';
import { SubirImagenesService } from '../subir-imagenes/subir-imagenes.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
})
export class InformacionPersonalComponent {
  constructor(
    private editService: EditService,
    private loginService: LoginService,
    private appService: AppService,
    private subirImagenes: SubirImagenesService
  ) {}

  toggleEditMode(): void {
    this.editService.toggleEditMode();
  }

  toggleLoginMode(): void {
    this.loginService.toggleLoginMode();
  }

  cerrarSesion(): void {
    this.loginService.cerarSesion();
  }

  toggleModalMode(): void {
    this.loginService.toggleModalMode();
  }

  editMode(): boolean {
    return this.editService.editMode;
  }

  loginStatus(): boolean {
    return this.loginService.loginStatus;
  }

  modalStatus(): boolean {
    return this.loginService.modalStatus;
  }

  subirArchivo(event: any): void {
    this.appService.subirImagen(event, 'informacionpersonal');
  }
}
