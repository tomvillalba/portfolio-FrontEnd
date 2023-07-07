import { Component } from '@angular/core';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
})
export class InformacionPersonalComponent {
  constructor(private editService: EditService) {}

  toggleEditMode(): void {
    this.editService.toggleEditMode();
  }

  editMode(): boolean {
    return this.editService.editMode;
  }
}
