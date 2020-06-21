import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  AlbumList: any = [];
  title:any;
  constructor(private activate: ActivatedRoute) {
  this.title=  this.activate.snapshot.queryParamMap.get('title');
  }

  ngOnInit() {
    this.AlbumList = JSON.parse(localStorage.getItem('albums'));
  }

}
