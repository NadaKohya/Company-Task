import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private myHttp:HttpClient) { }

  baseURL="http://localhost:3000/courses"

  GetAllCourses(){
    return this.myHttp.get(this.baseURL);
  }
  GetCourseByCategoryName(category:any){
    return this.myHttp.get(`http://localhost:3000/courses?category=${category}`)
  }
}
