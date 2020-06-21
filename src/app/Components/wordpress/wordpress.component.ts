import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss'],
})
export class WordpressComponent implements OnInit {
  WordpressList:any=[];
  constructor(private category:CategoriesService,private route:Router) { }

  ngOnInit() {
    this.category.getWordpress().subscribe((data:any)=>{
      this.WordpressList=data.wordpress;
    })
  }
  getWordpressDetails(id,data){
    this.route.navigate(['wordpress-details',id,data])
  }
}
