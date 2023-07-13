import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  editMode: boolean = true;

  enableEditMode() {
    this.editMode = true;
  }

  disableEditMode() {
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
