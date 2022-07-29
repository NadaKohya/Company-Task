import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/Services/courses.service';

@Component({
  selector: 'app-productmanagment',
  templateUrl: './productmanagment.component.html',
  styleUrls: ['./productmanagment.component.css']
})
export class ProductmanagmentComponent implements OnInit {

  constructor(private myService: CoursesService) { }

  Courses:any;
  CategoryName="ProductManagement"
  
    ngOnInit(): void {
      this.myService.GetCourseByCategoryName(this.CategoryName).subscribe(
        (data)=>{this.Courses = data},
        (err)=>{console.log(err)}
      )
    }
}
