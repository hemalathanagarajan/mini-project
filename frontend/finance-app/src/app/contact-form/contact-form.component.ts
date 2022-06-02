import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder} from '@angular/forms';
import { ApiService } from '../login.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  formGroup! : FormGroup;

userRecord: any ={
  Name:'',
  email:'',
  phone:'',
  message:'',

};
  constructor(private fb: FormBuilder, private api:ApiService) { }
  
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      Name: [this.userRecord.Name],
      email: [this.userRecord.email],
      phone:[this.userRecord.phone],
      message: [this.userRecord.message],
    });
  }
  get Name() {
    return this.formGroup.get('Name')!;
  }
  get email() {
    return this.formGroup.get('email')!;
  }
  get phone(){
    return this.formGroup.get('phone')!;
  }
  get message(){
    return this.formGroup.get('message')!;
  }
  storing(){

    const contact = {
      "Name":this.userRecord.Name,
      "email":this.userRecord.email,
      "phone":this.userRecord.phone,
      "message":this.userRecord.message,
      type:"contact"
    }

    this.api.add("finance_db",contact).subscribe(res=>{
      console.log(res);
      alert("Your request was received successfully!");
      this.userRecord.reset();
    },rej=>{
      alert("opps! Can not post request"+rej);
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





