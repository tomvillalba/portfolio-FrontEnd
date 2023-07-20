import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { EditService } from '../edit.service';
import { LoginService } from '../login/login.service';
import { ToastService } from 'angular-toastify';
import { Alertas } from '../utilidades';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [],
})
export class ProyectosComponent implements OnInit {
  data: any[] = [];

  constructor(
    private appService: AppService,
    private editService: EditService,
    private loginService: LoginService,
    private alerts: ToastService
  ) {}

  loginStatus(): boolean {
    return this.loginService.loginStatus;
  }

  editMode(): boolean {
    return this.editService.editMode;
  }
  ngOnInit() {
    this.appService.section = 'proyectos';
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

  agregarSeccion() {
    this.appService
      .updateData({
        titulo: 'titulo ejemplo',
        descripcion: 'descripcion ejemplo',
        foto_url:
          'https://picsum.photos/200/200?random=' +
          Math.floor(Math.random() * 100),
        link: 'https://www.google.com',
      })
      .subscribe(() => {
        this.alerts.success(Alertas.itemAgregar);
        this.getData();
      });
  }

  eliminarItem(id: number) {
    this.appService.deleteData(id).subscribe(() => {
      this.alerts.success(Alertas.itemEliminar);
      this.getData();
    });
  }

  subirImagen(event: any, item: any): void {
    this.appService.subirImagen(event, item)?.subscribe(() => {});
    setTimeout(() => {
      this.getData();
    }, 2000);
  }
}
