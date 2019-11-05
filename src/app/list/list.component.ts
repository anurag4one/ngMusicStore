/**
 * This is the List Class.
 * It also implements delete
 */

import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../model/album.model';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  albums: AlbumModel[];

  constructor(private service: StoreService) { }

  ngOnInit() {
    this.albums = this.service.listAlbum();
  }

  deleteAlbum(index: number) {
    var ans = confirm("Are You Sure You want To delete?");
    if (ans)
      this.service.deleteAlbum(index);
  }
}
