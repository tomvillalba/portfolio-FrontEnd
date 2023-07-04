import { Component, OnInit } from '@angular/core';
import { EducacionService } from './educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
})
export class EducacionComponent implements OnInit {
  educacionData: any[] = [];

  constructor(private educacionService: EducacionService) {}

  ngOnInit() {
    this.obtenerEducacion();
  }

  obtenerEducacion() {
    console.log('ejecutando obtener educacion');
    this.educacionService.getEducacion().subscribe((data) => {
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
    this.educacionService.actualizarEducacion(item).subscribe(() => {
      item.editando = false;
    });
  }

  agregarSeccion() {
    this.educacionService
      .actualizarEducacion({
        titulo: 'titulo ejemplo',
        descripcion: 'descripcion ejemplo',
      })
      .subscribe(() => {
        this.obtenerEducacion();
      });
  }

  eliminarItem(id: number) {
    this.educacionService.eliminarEducacion(id).subscribe(() => {
      this.obtenerEducacion();
    });
  }
}
