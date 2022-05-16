import { Component, OnInit } from '@angular/core';
import {apiService} from '../login.service';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgroup!: FormGroup;
loginrecord: any = {
  email: '',
  password: '',
};

  constructor(private fb:FormBuilder,private api:apiService ) { }

  
  ngOnInit() {
    this.formgroup =  this.fb.group({
        email: [this.loginrecord.email],
        password: [this.loginrecord.password],
    });
}
get email() { 
  // return this.loginForm.controls; 
  return this.formgroup.get('email')!;

}
get password() {
  return this.formgroup.get('password')!;
}

login(){
  console.log(this.formgroup.value);
  
  this.api.login(this.formgroup.value).subscribe(res =>{
  // this.authService.login(this.loginForm.value);
  // this.router.navigateByUrl('/admin');
  console.log(res);
  alert("You logged in successfully!");
  this.loginrecord.reset();
},rej=>{
  alert("opps! Can not able to login"+rej);
});
}

}
