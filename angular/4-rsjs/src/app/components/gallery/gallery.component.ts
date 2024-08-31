import { MatButtonModule } from '@angular/material/button';
import { GalleryEntity } from '@/app/models/gallery-entity';
import { GalleryService } from '@/app/services/gallery/gallery.service';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RotateDirective } from '@/app/directives/rotate.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf, NgFor, MatButtonModule, SlicePipe, RotateDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  gallery!: GalleryEntity[];
  selectedPhoto: GalleryEntity = { id: 0, src: '', title: '' };
  posPhoto: number = 0;
  totalPhotos: number = 0;
  size: number = 80;
  playing: boolean = false;
  interval!: any;
  page: number = 1;
  maxPages: number = 1;

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getGallery().then((gallery) => {
      this.gallery = gallery;

      this.posPhoto = Math.round(Math.random() * gallery.length);
      // this.posPhoto = 0;
      this.totalPhotos = gallery.length;
      this.selectedPhoto = gallery[this.posPhoto];
      this.page = Math.floor(this.posPhoto / 3) + 1;
      this.maxPages = Math.floor(gallery.length / 3) + 1;
      console.log(this.posPhoto, this.page);
    });
  }
  select(photo: GalleryEntity) {
    this.posPhoto = this.galleryService.findPhotoPosition(
      photo.id,
      this.gallery
    );
    this.selectedPhoto = photo;
  }
  next(): void {
    this.posPhoto =
      this.posPhoto < this.totalPhotos - 1 ? this.posPhoto + 1 : 0;
    this.selectedPhoto = this.gallery[this.posPhoto];
    this.page = Math.floor(this.posPhoto / 3) + 1;
    console.log(this.posPhoto, this.page);
  }
  nextPage(): void {
    this.page++;
  }
  previous(): void {
    this.posPhoto =
      this.posPhoto < 1 ? this.totalPhotos - 1 : this.posPhoto - 1;
    this.selectedPhoto = this.gallery[this.posPhoto];
    this.page = Math.floor(this.posPhoto / 3) + 1;
    console.log(this.posPhoto, this.page);
  }
  previousPage(): void {
    this.page--;
  }
  increase(): void {
    if (this.size < 100) this.size += 5;
    console.log(this.size);
  }
  decrease(): void {
    if (this.size > 20) this.size -= 5;
    console.log(this.size);
  }
  play(): void {
    this.playing = true;
    this.interval = setInterval(
      () => {
        this.next();
      },
      2000,
      this
    );
  }
  stop(): void {
    this.playing = false;
    clearInterval(this.interval);
  }
}
