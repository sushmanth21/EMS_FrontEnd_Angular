import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  constructor(private es : EmployeeService, private router : Router){

  }

  ngOnInit(): void {
    
  }

  employee={
    name:"",
    gender:"",
    age:"",
    state:""
  }

  AddEmployee():void{
    this.es.Post(this.employee).subscribe(
      data=>{
        this.router.navigate(['/ViewEmployee']);
        console.log(data)
      },
      res=>{
        this.router.navigate(['/ViewEmployee']);
      }
    )
  }

  CancelAdd():void{
    this.router.navigateByUrl("/ViewEmployee")
  }
}
