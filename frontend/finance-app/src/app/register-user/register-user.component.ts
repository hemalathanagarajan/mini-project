import { Component } from '@angular/core';
import {ApiService} from '../login.service';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { NotificationService } from '../notification.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent  {
  public inputType:string = 'password';
  checkoutform: FormGroup;
  userrecord!:{};
  object:[]| undefined;
  notifyService: any;
  
  constructor(private fb: FormBuilder,private api:ApiService,private alert:NotificationService, private router:Router) {
    this.checkoutform = this.fb.group({
      Name: ['',[Validators.required,Validators.minLength(4)]],
      username: ['',[Validators.required]],
      email: ['',[Validators.email,Validators.required]],
      password: ['', [Validators.required]],
     mobile: ['',[Validators.maxLength(10), Validators.required]],
      
          });
   }

 
  get Name() {
    return this.checkoutform.get('Name')!;
  }
  get username() {
    return this.checkoutform.get('username')!;
  }
  get email() {
    return this.checkoutform.get('email')!;
  }
  get mobile(){
    return this.checkoutform.get('mobile')!;
  }
  get password(){
    return this.checkoutform.get('password')!;
  }
  public showPassword(event:any):void{
    if(event.target.checked){
      this.inputType = "text"
    }
    else {
      this.inputType = "password"
    }
  }
  
  



  signup(Formvalue:any)
  { 
    
    
    console.log("from form",Formvalue);
    this.api.storedata(Formvalue).subscribe((res)=>{
      
      console.log("data returned from server",res);
      this.alert.showSuccess("Success","Data posted success Fully");
      this.router.navigate(['/login']);
      

    },rej =>{
      console.log(rej)
      this.alert.showError("Cant able to Signin","Error" + rej.error.message.reason);
    })


  }
    onReset():void {
      this.checkoutform.reset();


  }

 
showToasterError(){
    this.alert.showError("Something is wrong", "error")
}
 

showToasterSuccess(){
  this.alert.showSuccess("success","User Signedin Success Fully")

}
  
}
        




