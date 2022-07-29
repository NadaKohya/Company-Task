import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent implements OnInit {

  constructor(private myService: CoursesService) { }

  Courses:any;
  CategoryName="Branding"
  
    ngOnInit(): void {
      this.myService.GetCourseByCategoryName(this.CategoryName).subscribe(
        (data)=>{this.Courses = data},
        (err)=>{console.log(err)}
      )
    }
}
