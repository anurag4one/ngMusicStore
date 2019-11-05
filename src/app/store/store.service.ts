/*
This is the service layer
*/

import { Injectable } from '@angular/core';
import { AlbumModel } from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  albums: AlbumModel[] = [];
  index: number;

  constructor() { }

  addAlbum(album: AlbumModel) {
    this.albums.push(album);
  }

  listAlbum() {
    return this.albums;
  }

  deleteAlbum(index: number) {
    return this.albums.splice(index, 1);
  }
}
