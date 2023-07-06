import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
})
export class EducacionComponent implements OnInit {
  educacionData: any[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.section = 'educacion';
    this.getData();
  }

  getData() {
    this.appService.getData().subscribe((data) => {
      this.educacionData = data;
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
