import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.css']
})
export class UiUxComponent implements OnInit {

  constructor(private myService: CoursesService) { }

  Courses:any;
  CategoryName="UIUX"
  
    ngOnInit(): void {
      this.myService.GetCourseByCategoryName(this.CategoryName).subscribe(
        (data)=>{this.Courses = data},
        (err)=>{console.log(err)}
      )
    }

}
