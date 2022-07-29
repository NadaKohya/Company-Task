import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../Services/courses.service';

@Component({
  selector: 'app-all-programes',
  templateUrl: './all-programes.component.html',
  styleUrls: ['./all-programes.component.css']
})
export class AllProgramesComponent implements OnInit {

  constructor(private myService: CoursesService) { }

Courses:any;

  ngOnInit(): void {
    this.myService.GetAllCourses().subscribe(
      (data)=>{this.Courses = data},
      (err)=>{console.log(err)}
    )
  }

}
