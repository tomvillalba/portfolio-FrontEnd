import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  providers: [AppService],
})
export class IdiomasComponent implements OnInit {
  data: any[] = [];

  constructor(
    private appService: AppService,
    private editService: EditService
  ) {}

  ngOnInit() {
    this.appService.section = 'idiomas';
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
    if (item.porcentaje > 100)
      return console.log('No se puede poner porcentajes superiores al 100%');
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
