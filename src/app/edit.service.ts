import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  editMode: boolean = false;

  enableEditMode() {
    this.editMode = true;
  }

  disableEditMode() {
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;

    this.editMode
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }
}
