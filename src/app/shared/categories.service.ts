import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url = "../../assets/db.json";
  constructor(private http: HttpClient) { }

  getDatas() {
    return this.http.get(this.url);
  }
  getNewsList() {
    return this.http.get(this.url);
  }
  // getNewsListById(id) {
  //   return this.http.get(this.url + '/news/' + id);
  // }
  getAppetizers() {
    return this.http.get(this.url)
  }
  getSalads() {
    return this.http.get(this.url)
  }
  getSides() {
    return this.http.get(this.url);
  }
  getdeserts() {
    return this.http.get(this.url);
  }
  getMainCourse() {
    return this.http.get(this.url);
  }
  getWordpress() {
    return this.http.get(this.url);
  }

  getDrupaldata() {
    return this.http.get(this.url);
  }
  // getDrupaldataByID(id) {
  //   return this.http.get(this.url + '/drupal/' + id)
  // }
  // getwordpressdatabyId(id) {
  //   return this.http.get(this.url + '/word-press/' + id)
  // }
  getevents() {
    return this.http.get(this.url);
  }

  // getEventDetailsbyId(id) {
  //   return this.http.get(this.url + '/events/' + id);

  // }
}
