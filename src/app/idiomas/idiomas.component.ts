import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { EditService } from '../edit.service';
import { ToastService } from 'angular-toastify';
import { Alertas } from '../utilidades';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  providers: [AppService],
})
export class IdiomasComponent implements OnInit {
  data: any[] = [];

  constructor(
    private appService: AppService,
    private editService: EditService,
    private alerts: ToastService
  ) {}

  ngOnInit() {
    this.appService.section = 'idiomas';
    this.getData();
    console.log(
      'en caso de que haya un error con la api, es un problema de render que se desactiva por inactividad. Una vez q entres, al poco tiempo se activa de nuevo'
    );
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
    if (item.porcentaje > 100)
      return this.alerts.error(Alertas.porcentajeError);
    this.appService.updateData(item).subscribe(() => {
      item.editando = false;
    });
  }

  agregarSeccion() {
    this.appService
      .updateData({
        titulo: 'idioma ejemplo',
        porcentaje: 50,
      })
      .subscribe(() => {
        this.getData();
      });
  }

  eliminarItem(id: number) {
    this.appService.deleteData(id).subscribe(() => {
      this.getData();
    });
  }

  editMode(): boolean {
    return this.editService.editMode;
  }
}
