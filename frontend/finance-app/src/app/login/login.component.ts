import { Component, OnInit, Input } from '@angular/core';
import {ApiService} from '../login.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() idvalue: any;
  formgroup !: FormGroup;
  object:any =[];
  alldata:any;
  localvar:any;
loginrecord: any = {
  email: '',
  password: '',
};
obj1: any = {
        name:'',
        username:'',
        email:'',
        password:'',
        mobile:'',
       _id:'',
       _rev:'',
        
      };
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router,private toastr:ToastrService) { }

  
  ngOnInit() {
    this.formgroup =  this.fb.group({
        
        email: ['',Validators.email],
      password: ['', [ Validators.minLength(8)]],
    });
   
}
get email() { 
  return this.formgroup.get('email')!;
}
get password() {
  return this.formgroup.get('password')!;
}
login(Formvalue:any)
  {
    console.log(Formvalue.email);
    this.api.login_Get(Formvalue.email).subscribe((data)=>{
      console.log("data returned from server",data); 
      if(data.docs.length <= 0 ){
        this.toastr.error("Invalid login","Email not exist");
      }        
   else if(data.docs[0].password == Formvalue.password){
  this.toastr.success("success","Logged in successFully");
this.router.navigate(['/dashboard']);

}
else{
  this.toastr.error("Try Again ","Invalid Password")
}
let datas =  {

  name: data["docs"][0].name,
 username: data["docs"][0].username,
 email: data["docs"][0].email,
 password: data["docs"][0].password,
 id:data["docs"][0]._id,
 rev:data["docs"][0]._rev,
    
   }
localStorage.setItem('obj1', JSON.stringify(datas));
},_rej=>{
  this.toastr.error("enter a data");
})

}
}
 








