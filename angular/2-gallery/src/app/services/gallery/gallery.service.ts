import { Injectable } from '@angular/core';
import { GalleryEntity } from '../../models/gallery-entity';
import { GalleryData } from './gallery.data';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor() {}

  getGallery(): Promise<GalleryEntity[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(GalleryData);
      }, 1000);
    });
  }

  findPhotoPosition(id: number, gallery: GalleryEntity[]): number {
    let pos!: number;
    gallery.forEach((value, index) => {
      if (value.id === id) pos = index;
    });
    return pos;
  }
}
