import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  constructor(private es : EmployeeService, private router : Router, private route : ActivatedRoute){

  }

  ngOnInit(): void {
    this.GetEmployeeById()
  }

  employee:any
  id=this.route.snapshot.params['id']

  GetEmployeeById(){
    this.es.GetById(this.id).subscribe(
      data=>{
        this.employee=data;
      }
    )
  }

  EditEmployee():void{
    this.es.Put(this.id, this.employee).subscribe(
      data=>{
        this.router.navigate(['/ViewEmployee']);
        console.log(data)
      },
      res=>{
        this.router.navigate(['/ViewEmployee']);
      }
    )
  }

  CancelEdit():void{
    this.router.navigateByUrl("/ViewEmployee")
  }
}
