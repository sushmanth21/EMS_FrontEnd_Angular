import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit{

  constructor(private es : EmployeeService, private router : Router){

  }

  ngOnInit(): void {
    this.ViewEmployees()
  }

  employees:any;

  ViewEmployees():void{
    this.es.Get().subscribe(
      data=>{
        this.employees=data
      },
      error=>{
        console.log(error);
      }
    )
  }

  DeleteEmployee(id : any):void{
    this.es.Delete(id).subscribe(
      data=>{
        this.router.navigate(['/ViewEmployee'])
      },
      error=>{
        this.ViewEmployees();
      }
    )
  }

  ToEditEmployee(id : any):void{
    this.router.navigate(["/EditEmployee",id])
  }
}
