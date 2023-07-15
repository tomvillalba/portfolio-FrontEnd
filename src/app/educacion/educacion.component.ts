import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { EditService } from '../edit.service';
import { LoginService } from '../login/login.service';
import { Alertas } from '../utilidades';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  providers: [AppService],
})
export class EducacionComponent implements OnInit {
  data: any[] = [];

  constructor(
    private appService: AppService,
    private editService: EditService,
    private loginService: LoginService,
    private alerts: ToastService
  ) {}

  ngOnInit() {
    this.appService.section = 'educacion';
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
  editMode(): boolean {
    return this.editService.editMode;
  }

  loginStatus(): boolean {
    return this.loginService.loginStatus;
  }
}
