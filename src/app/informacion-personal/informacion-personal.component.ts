import { Component, OnInit } from '@angular/core';
import { EditService } from '../edit.service';
import { LoginService } from '../login/login.service';
import { AppService } from '../app.service';
import { ToastService } from 'angular-toastify';
import { Alertas } from '../utilidades';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  providers: [AppService],
})
export class InformacionPersonalComponent implements OnInit {
  data: any[] = [];

  constructor(
    private editService: EditService,
    private loginService: LoginService,
    private appService: AppService,
    private alerts: ToastService
  ) {}

  ngOnInit() {
    this.appService.section = 'informacionpersonal';
    this.getData();
  }

  getData() {
    this.appService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  editarItem(item: any) {
    item.editando = true;
  }

  cancelarEdicion(item: any) {
    item.editando = false;
  }

  guardarCambios(item: any) {
    this.appService.updateData(item).subscribe(() => {
      this.alerts.success(Alertas.guardarCambios);
      item.editando = false;
    });
  }

  subirImagen(event: any, item: any): void {
    this.appService.subirImagen(event, item)?.subscribe(() => {});
    setTimeout(() => {
      this.getData();
    }, 2000);
  }

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
}
