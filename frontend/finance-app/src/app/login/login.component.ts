import { Component, OnInit, Input } from '@angular/core';
import {apiService} from '../login.service';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

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
  
  

  constructor(private fb:FormBuilder,private api:apiService,private router:Router,private alert: NotificationService ) { }

  
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
//--------------angular to couch connection code
// login(){
//   console.log(this.formgroup.value);
  
//   this.api.get(this.formgroup.value).subscribe(res =>{
//   // this.authService.login(this.loginForm.value);
//   // this.router.navigateByUrl('/admin');
//   console.log(res);
//   alert("You logged in successfully!");
//   this.loginrecord.reset();
// },rej=>{
//   alert("opps! Can not able to login"+rej);
// });
// }
// }
//=----------------------------------------


  //------------------login code for node  to couch (working code)---

login(Formvalue:any)
  {
    console.log(Formvalue.email);
    // console.log();
    this.api.test_get(Formvalue.email).subscribe((data)=>{
      console.log("data returned from server",data); // original code
      this.alert.showSuccess("success","Data posted success Fully")


      //---just code
      // console.log("data returned from server",data["docs"][0].email);
      // console.log("data returned from server",data["docs"][0].password);
      let datas =  {


        name: data["docs"][0].name,
        username: data["docs"][0].username,
        email: data["docs"][0].email,
        password: data["docs"][0].password,
        // mobile: data["docs"][0].mobile,
        id:data["docs"][0]._id,
        // rev:data["docs"][0]._rev,
        // type:data["docs"]
       }
localStorage.setItem('obj1', JSON.stringify(datas));
this.router.navigate(['/dashboard']);


      // console.log("data returned from server",data);
      // console.log(data.password);


       if(data.docs[0].email == Formvalue.email){
      // alert("  logged in Successfully");

        // if(data.docs[0] == Formvalue){
      }
      else{
        alert("cant login");
      this.alert.showError("data cant post","error");

      }


      
})
let  formvalue = JSON.parse(localStorage.getItem('obj1') || '{}');
console.log("obj1 object :", formvalue);
console.log("object email:", formvalue.email);
console.log("object id:", formvalue.id);

}

}
 






//-------------------------------
