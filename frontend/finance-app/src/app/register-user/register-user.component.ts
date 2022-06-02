import { Component } from '@angular/core';
import {apiService} from '../login.service';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { NotificationService } from '../notification.service';


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
  
  constructor(private fb: FormBuilder,private api:apiService,private alert:NotificationService) {
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
    event.target.checked ? this.inputType = "text" : this.inputType = "password";
  }
  
  



  signup(Formvalue:any)
  { 
    
    
    console.log("from form",Formvalue);
    this.api.storedata(Formvalue).subscribe((res)=>{
      
      console.log("data returned from server",res);
      this.alert.showSuccess("success","Data posted success Fully")

    },rej =>{
      console.log(rej)
      this.alert.showError("data cant post","error" + rej);
    })


  }
    onReset():void {
      this.checkoutform.reset();


  }

 
showToasterError(){
    this.alert.showError("Something is wrong", "tutsmake.com")
}
 

showToasterSuccess(){
  this.alert.showSuccess("success","Data posted success Fully")

}
  
}
        




