import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {path: "AddEmployee", component: AddEmployeeComponent},
  {path: "ViewEmployee", component: ViewEmployeeComponent},
  {path: "EditEmployee/:id", component: EditEmployeeComponent},
  {path: "", redirectTo:"ViewEmployee", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
