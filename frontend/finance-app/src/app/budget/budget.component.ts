import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ApiService} from '../login.service';
import  {rangeValidator}  from './validator';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {
formgroup: FormGroup;
result!:number;
budgetall !:number;
value : any;
place:any;
fields:any;
homeAmount:string | undefined;
foodAmount:string | undefined;clothAmount:string | undefined;eb_billAmount:string | undefined;
educationAmount:string | undefined;
EMIAmount:string | undefined;entertainmentAmount:string | undefined;
transportAmount:string | undefined;
healthAmount:string | undefined;
budget: any = {
    
        home: '',
        food: '',
        cloth: '',
        eb_bill:'',
        education: '',
        EMI: '',
        entertainment: '',
        transport: '',
        health: '',
        month:'',
        location:'',
      
};
  temp: any;
  temp1: any;
 



  constructor(private fb: FormBuilder,private api:ApiService, private alert:NotificationService) { 
    this.formgroup = this.fb.group({
        home: ['',[Validators.required,rangeValidator(0,Infinity)]],
        food: ['',[Validators.required,rangeValidator(0,Infinity)]],
        cloth: ['',[Validators.required,rangeValidator(0,Infinity)]],
        eb_bill: ['', [Validators.required, rangeValidator(0,Infinity)]],
      
        education: ['',[Validators.required,rangeValidator(0,Infinity)]],
        EMI: ['',[Validators.required,rangeValidator(0,Infinity)]],
        entertainment: ['',[Validators.required,rangeValidator(0,Infinity)]],
        transport: ['',[Validators.required,rangeValidator(0,Infinity)]],
        health: ['',[Validators.required,rangeValidator(0,Infinity)]],
        budgetall: [''],
        month:[''],
        location:['']
      });
  }
  
  get home() {
    return this.formgroup.get('home')!;
  }

get food() {
  return this.formgroup.get('food')!;
}
get cloth() {
  return this.formgroup.get('cloth')!;
}
get eb_bill(){
  return this.formgroup.get('eb_bill')!;
}
get education(){
  return this.formgroup.get('education')!;
}
get EMI(){
  return this.formgroup.get('EMI')!;
}
get entertainment(){
  return this.formgroup.get('entertainment')!;
}
get transport(){
  return this.formgroup.get('transport')!;
}
get health(){
  return this.formgroup.get('health')!;
}
get month(){
  return this.formgroup.get('month')!;
}
get location(){
  return this.formgroup.get('location')!;
}
onReset():void {
  this.formgroup.reset();


}


  submit(Formvalue:any){
    const  userData = JSON.parse(localStorage.getItem('obj1') || '{}');
    console.log(userData);
      
       const budget = {
      "home":Formvalue.home,
      "food":Formvalue.food,
      "cloth":Formvalue.cloth,
      "eb_bill":Formvalue.eb_bill,
      "education":Formvalue.education,
      "EMI":Formvalue.EMI,
      "entertainment":Formvalue.entertainment,
      "transport":Formvalue.transport,
      "health":Formvalue.health,
      "budgetall":Formvalue.budgetall,
      "month":Formvalue.month,
      type:"budget",
      user:userData.id,
      "location" : this.temp1,
      

    }
      this.api.add("finance_db",budget).subscribe(res=>{
        console.log(res);
      this.alert.showSuccess("success","Budget Created Successfully")
        

      },
      rej=>{
      this.alert.showError("data cant post","error"+rej);
        
      });
}
userbudgetValue = {
 
 "details" : this.budget

}

AddBudget(userbudgetValue:any){
console.log(userbudgetValue);

 
  this.result = userbudgetValue.home + userbudgetValue.food +userbudgetValue.cloth + userbudgetValue.eb_bill +userbudgetValue.entertainment+ userbudgetValue.education+userbudgetValue.EMI+userbudgetValue.transport+userbudgetValue.health;

this.formgroup.controls['budgetall'].setValue(this.result);

}


valueChanged(event:any) {

console.log(event.target.value);
this.place = event.target.value
this.api.getLocation(this.place,this.fields).subscribe((data => {
  console.log(data);
  this.temp=data;
  this.temp1=this.temp.docs[0]._id;
  console.log(this.temp1);

})
);
return this.temp1;
}

}