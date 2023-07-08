import { Component, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { AppService } from 'src/app/app.service';
import { EditService } from 'src/app/edit.service';
import { Alertas } from 'src/app/utilidades';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styles: [],
  providers: [AppService],
})
export class HardComponent implements OnInit {
  skills: any[] = [];

  constructor(
    private appService: AppService,
    private editService: EditService,
    private alerts: ToastService
  ) {}

  editMode(): boolean {
    return this.editService.editMode;
  }

  ngOnInit() {
    this.appService.section = 'hardskills';
    this.getData();
  }

  getData() {
    this.appService.getData().subscribe((data) => {
      this.skills = data;
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
        titulo: 'hard skill ejemplo',
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
}
