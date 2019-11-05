/**
 * Add function is implemented here
 * and which redirects to the list page
 */

import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../model/album.model';
import { StoreService } from '../store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  album: AlbumModel;

  constructor(private service: StoreService, private route: Router) {
    this.album = new AlbumModel();
  }

  ngOnInit() {
  }

  addAlbum() {
    this.service.addAlbum(this.album);
    this.album = new AlbumModel();
    this.route.navigate(['list']);
  }
}
