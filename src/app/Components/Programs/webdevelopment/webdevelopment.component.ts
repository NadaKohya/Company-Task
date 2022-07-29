import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrls: ['./webdevelopment.component.css']
})
export class WebdevelopmentComponent implements OnInit {

  constructor(private myService: CoursesService) { }

  Courses:any;
  CategoryName="WebDevelopment"
  
    ngOnInit(): void {
      this.myService.GetCourseByCategoryName(this.CategoryName).subscribe(
        (data)=>{this.Courses = data},
        (err)=>{console.log(err)}
      )
    }

}
