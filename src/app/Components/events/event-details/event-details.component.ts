import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
  id: any;
  EventDetails: any = [];
  constructor(private activate: ActivatedRoute, private category: CategoriesService) {
    let sub = this.activate.params.subscribe(params => {
      this.id = params['id'];
      this.EventDetails=params;

    })
  }

  ngOnInit() {
   }

}
