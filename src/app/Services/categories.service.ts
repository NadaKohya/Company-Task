import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private myHttp:HttpClient) { }
  baseURL='http://localhost:3000/categories'
  GetAllCategories(){
    return this.myHttp.get(this.baseURL)
  }
}
