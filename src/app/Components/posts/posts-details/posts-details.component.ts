import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.scss'],
})
export class PostsDetailsComponent implements OnInit {
  id: any;
  PostsDetails: any = [];
  constructor(private active: ActivatedRoute) {
    this.active.params.subscribe(params => {
      this.id = params['id']
      this.PostsDetails = params;
    })
  }

  ngOnInit() { }

}
