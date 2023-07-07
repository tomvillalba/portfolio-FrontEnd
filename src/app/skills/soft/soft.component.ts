import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { EditService } from 'src/app/edit.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styles: [],
  providers: [AppService],
})
export class SoftComponent implements OnInit {
  skills: any[] = [];

  constructor(
    private appService: AppService,
    private editService: EditService
  ) {}

  editMode(): boolean {
    return this.editService.editMode;
  }

  ngOnInit() {
    this.appService.section = 'softskills';
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
      return console.log('No se puede poner porcentajes superiores al 100%');
    this.appService.updateData(item).subscribe(() => {
      item.editando = false;
    });
  }

  agregarSeccion() {
    this.appService
      .updateData({
        titulo: 'soft skill ejemplo',
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
