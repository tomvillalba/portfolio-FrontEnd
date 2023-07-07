import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styles: [],
})
export class ExperienciaComponent implements OnInit {
  data: any[] = [];

  constructor(
    private appService: AppService,
    private editService: EditService
  ) {}
  editMode(): boolean {
    return this.editService.editMode;
  }
  ngOnInit() {
    this.appService.section = 'experiencia';
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
        this.getData();
      });
  }

  eliminarItem(id: number) {
    this.appService.deleteData(id).subscribe(() => {
      this.getData();
    });
  }
}
