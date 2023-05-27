import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) {

  }

  getUrl="http://localhost:8080/api/GetEmployees";
  deleteUrl="http://localhost:8080/api/DeleteEmployee/";
  postUrl="http://localhost:8080/api/AddEmployee";
  editUrl="http://localhost:8080/api/EditEmployee/";
  getByIdUrl="http://localhost:8080/api/GetEmployee/";

  Get(){
    return this.http.get(this.getUrl)
  }

  Delete(id :any){
    return this.http.delete(this.deleteUrl+id)
  }

  Post(data :any){
    return this.http.post(this.postUrl,data)
  }

  Put(id :any, data :any){
    return this.http.put(this.editUrl+id,data)
  }

  GetById(id :any){
    return this.http.get(this.getByIdUrl+id)
  }
}
