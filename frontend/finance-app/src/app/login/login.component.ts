import { Component, OnInit, Input } from '@angular/core';
import {apiService} from '../login.service';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

  import { NotificationService } from '../notification.service';

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
  
  

  constructor(private fb:FormBuilder,private api:apiService,private router:Router,private toastr:ToastrService) { }

  
  ngOnInit() {
    this.formgroup =  this.fb.group({
        
        email: ['',Validators.email],
      password: ['', [ Validators.minLength(8)]],
    });
}
get email() { 
  // return this.loginForm.controls; 
  return this.formgroup.get('email')!;

}
get password() {
  return this.formgroup.get('password')!;
}




login(Formvalue:any)
  {
    console.log(Formvalue.email);
    this.api.test_get(Formvalue.email).subscribe((data)=>{
      console.log("data returned from server",data); 
      
if(data.docs[0].email == Formvalue.email){
  this.toastr.success("success","Logged in successFully");
this.router.navigate(['/dashboard']);

}
if(data.docs[0].email.length <= 0 ){
  this.toastr.error("data cant login","error");
}     

let datas =  {


  name: data["docs"][0].name,
 username: data["docs"][0].username,
 email: data["docs"][0].email,
 password: data["docs"][0].password,
 id:data["docs"][0]._id,
    
   }
localStorage.setItem('obj1', JSON.stringify(datas));


     

      


      
})
let  formvalue = JSON.parse(localStorage.getItem('obj1') || '{}');
console.log("obj1 object :", formvalue);
console.log("object email:", formvalue.email);
console.log("object id:", formvalue.id);

}

}
 






//-------------------------------
