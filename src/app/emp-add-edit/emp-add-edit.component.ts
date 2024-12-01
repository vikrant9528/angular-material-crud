import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  empForm:FormGroup;

 education:string[] = [
  'matric',
  'diploma',
  'intermediate',
  'graduate',
  'postgraduate'
 ]

 constructor(private _fb:FormBuilder,private _empService:EmployeeService, private _dialogRef:MatDialogRef<EmpAddEditComponent>){
  this.empForm = this._fb.group({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    education: '',
    company: '',
    experience: '',
    package: ''
  })
 }
 onFormSubmit(){
  if(this.empForm.valid){
    console.log(this.empForm.value)
    this._empService.addEmployee(this.empForm.value).subscribe({
      next:(val:any) => {
        alert('employee added successfully');
        this._dialogRef.close(true);
      },
      error: (err:any) => {
        console.log(err)
      }
    })
  }
 }
}
