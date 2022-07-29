import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-mobiledevelopment',
  templateUrl: './mobiledevelopment.component.html',
  styleUrls: ['./mobiledevelopment.component.css']
})
export class MobiledevelopmentComponent implements OnInit {

  constructor(private myService: CoursesService) { }

  Courses:any;
  CategoryName="MobileDevelopment"
  
    ngOnInit(): void {
      this.myService.GetCourseByCategoryName(this.CategoryName).subscribe(
        (data)=>{this.Courses = data},
        (err)=>{console.log(err)}
      )
    }

}
