import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root',
})
export class SubirImagenesService {
  data: any;
  constructor(private storage: Storage) {}

  ngOnInit(): void {}

  async subirArchivo(event: any): Promise<any> {
    if (event.target.files.length === 0) return 'https://picsum.photos/200/200';

    const file = event.target.files[0];
    const imageRef = ref(this.storage, 'images/' + file.name);

    await uploadBytes(imageRef, file);
    const foto_url = await getDownloadURL(imageRef);
    this.data = foto_url;
    return foto_url;
  }
}
