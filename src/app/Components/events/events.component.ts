import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  EventList: any = [];
  constructor(private category: CategoriesService, private route: Router) { }

  ngOnInit() {
    this.category.getevents().subscribe((result: any) => {
      this.EventList = result.events;
    })
  }
  onEventDetails(id,data) {
    this.route.navigate(['/event-details', id,data])
  }
}
