import { Component, OnInit } from '@angular/core';
import {apiService} from '../login.service';
import {FormGroup,FormBuilder,NgForm} from '@angular/forms';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formGroup: FormGroup;
  userRecord: any = {
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    mobile: '',
  };
  constructor(private fb: FormBuilder,private api:apiService) {
    this.formGroup = this.fb.group({
      firstName: [this.userRecord.firstName],
      lastName: [this.userRecord.lastName],
      email: [this.userRecord.email],
      password:[this.userRecord.password],
      mobile: [this.userRecord.mobile],
    });
   }

  ngOnInit(): void {
  }
  get firstName() {
    return this.formGroup.get('firstName')!;
  }
  get lastName() {
    return this.formGroup.get('lastName')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  get mobile(){
    return this.formGroup.get('mobile')!;
  }
  get password(){
    return this.formGroup.get('password')!;
  }
  storing(){
    // console.log(formdata);
    // this.store.pushData(formdata);
    this.api.add("finance_db",this.formGroup.value).subscribe(res=>{
      console.log(res);
      alert("Your data was posted successfully!");
      this.userRecord.reset();
    },rej=>{
      alert("opps! Can not post data"+rej);
    });
    this.api.get("finance_db").subscribe(res=>{
      console.log(res);
      alert("Your data was posted successfully!");
      this.userRecord.reset();
    },rej=>{
      alert("opps! Can not post data"+rej);
    });

    
  }
}


