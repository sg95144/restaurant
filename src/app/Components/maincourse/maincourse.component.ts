import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.scss'],
})
export class MaincourseComponent implements OnInit {
  MainCourseList: any = [];
  constructor(private category: CategoriesService, private route: Router) { }

  ngOnInit() {
    this.category.getMainCourse().subscribe((result: any) => {
      this.MainCourseList = result.maincourse;
    })
  }
  onProduct(id, data) {
    this.route.navigate(['/products', id, data]);
  }
}
