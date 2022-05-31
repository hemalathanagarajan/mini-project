import { Component, OnInit } from '@angular/core';
import {apiService} from '../login.service';
import {FormGroup,FormBuilder,NgForm, Validators} from '@angular/forms';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public inputType:string = 'password';
  checkoutform: FormGroup;
  // submitted=false;
  userrecord!:{};
  object:[]| undefined;
  notifyService: any;
  
  constructor(private fb: FormBuilder,private api:apiService,private alert:NotificationService) {
    this.checkoutform = this.fb.group({
      Name: ['',[Validators.required,Validators.minLength(4)]],
      username: ['',[Validators.required,Validators.minLength(8)]],
      email: ['',[Validators.email,Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
     mobile: ['',[Validators.maxLength(10), Validators.required]],
      
          });
   }

  ngOnInit(): void {
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
    // const user = {
    //   "firstName":Formvalue.firstName,
    //   "type":"user"
    // }
    
    console.log("from form",Formvalue);
    this.api.storedata(Formvalue).subscribe((res)=>{
      if(Formvalue.valid){
      this.alert.showSuccess("success","Data posted success Fully")
      }
      console.log("data returned from server",res);
      // alert("you have signed up successfully");
      // console.log("id",data.id);
    },rej =>{
      this.alert.showError("data cant post","error");
    })

    if(Formvalue.invalid){
      this.alert.showError("data cant post","error");
      
    }
    
  // if(this.checkoutform.invalid){
  //   return;
  // }
  console.log(JSON.stringify(this.checkoutform.value));
  }
    onReset():void {
      // this.submitted=false;
      this.checkoutform.reset();


  }
//   showToasterSuccess(){
//     this.notifyService.showSuccess("Data shown successfully !!", "tutsmake.com")
// }
 
showToasterError(){
    this.alert.showError("Something is wrong", "tutsmake.com")
}
 
// showToasterInfo(){
//     this.notifyService.showInfo("This is info", "tutsmake.com")
// }
 
// showToasterWarning(){
//     this.notifyService.showWarning("This is warning", "tutsmake.com")
// }
showToasterSuccess(){
  this.alert.showSuccess("success","Data posted success Fully")

}
  
}
        




