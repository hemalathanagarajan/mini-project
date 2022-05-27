import { Component, OnInit } from '@angular/core';
import {apiService} from '../login.service';
import {FormGroup,FormBuilder,NgForm, Validators} from '@angular/forms';


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
  // userRecord: any = {
  //   Name: '',
  //   username: '',
  //   email: '',
  //   password:'',
  //   mobile: '',
  // };
  constructor(private fb: FormBuilder,private api:apiService) {
    this.checkoutform = this.fb.group({
      Name: ['',[Validators.required,Validators.minLength(4)]],
      username: ['',[Validators.required,Validators.minLength(8)]],
      email: ['',[Validators.email,Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    
      mobile: ['',[Validators.maxLength(10), Validators.required]],
      door: ['',[Validators.minLength(5), Validators.required]],
      address: ['',[ Validators.required]],
      state: ['',[ Validators.required]],
      city: ['',[ Validators.required]],
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
  get door(){
    return this.checkoutform.get('door')!;
  }
  get address(){
    return this.checkoutform.get('address')!;
  }
  get state(){
    return this.checkoutform.get('state')!;
  }
  get city(){
    return this.checkoutform.get('city')!;
  }
 
 
 
 
  public showPassword(event:any):void{
    event.target.checked ? this.inputType = "text" : this.inputType = "password";
  }
  
  


//       ----- for storing into database(couchDB)------ below code
  // storing(){
  //   // console.log(formdata);
  //   // this.store.pushData(formdata);
  //   this.api.add("finance_db",this.checkoutform.value).subscribe(res=>{
  //     console.log(res);
  //     alert("Your data was posted successfully!");
  //     this.userRecord.reset();
  //   },rej=>{
  //     alert("opps! Can not post data"+rej);
  //   });


  //   this.api.get("finance_db").subscribe(res=>{
  //     console.log(res);
  //     alert("Your data was posted successfully!");
  //     this.userRecord.reset();
  //   },rej=>{
  //     alert("opps! Can not post data"+rej);
  //   });

    
  // } ----------- node connection
  storing(Formvalue:any)
  { 
    // const user = {
    //   "firstName":Formvalue.firstName,
    //   "type":"user"
    // }
    console.log("from form",Formvalue);
    this.api.storedata(Formvalue).subscribe((data)=>{
      console.log("data returned from server",data);
      alert("you have signed up successfully");
      console.log("id",data.id);
    })
  // this.submitted=true;
  if(this.checkoutform.invalid){
    return;
  }
  console.log(JSON.stringify(this.checkoutform.value,null));
    }
      onReset():void {
      // this.submitted=false;
      this.checkoutform.reset();


  }

  // displayDetails(Formvalue:any) {
  
  //      this.api.getUser().subscribe(data=>{
  //       console.log(data);
  //       console.log('Data was fetching');
  //       this.userrecord=data;
  //       this.userrecord=this.userrecord.rows;
  //       console.log(this.userrecord);
  //       for(const i in this.userrecord){
  //        if(Object.prototype.hasOwnProperty.call(this.userrecord,i)){
  //         const elt = this.userrecord[i];
  //         console.log(elt.id);
  //         this.api.getUserId(elt.id).subscribe(res=>{
  //          console.log(res);
  //          this.object.push(res);
  //          console.log('details of the traveller was successfully added');
          
  //         })
    
    

}
        


