import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../login.service';
import  {rangeValidator}  from './validator';
import {NotificationService} from '../notification.service';


@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
})
export class ExpenseListComponent implements OnInit {
  
formgroup!: FormGroup;
result!:number;
expenseall !:number;
alluser: any;
  alluserData: any;
  store: any = []
  obj: any;
  Id: any;
  userData:any;



expense: any = {
    
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
      
};
  constructor(private fb: FormBuilder,private api:ApiService,private alert:NotificationService) { 
    this.formgroup = this.fb.group({
        home: ['',[Validators.required,rangeValidator(0,Infinity)]],
        food: ['',[Validators.required,rangeValidator(0,Infinity)]],
        cloth: ['',[Validators.required,rangeValidator(0,Infinity)]],
        eb_bill: ['', [Validators.required,rangeValidator(0,Infinity)]],
      
        education: ['',[Validators.required],rangeValidator(0,Infinity)],
        EMI: ['',[Validators.required,rangeValidator(0,Infinity)]],
        entertainment: ['',[Validators.required,rangeValidator(0,Infinity)]],
        transport: ['',[Validators.required,rangeValidator(0,Infinity)]],
        health: ['',[Validators.required,rangeValidator(0,Infinity)]],
        expenseall: [''],
        Id:[''],
        month:[''],


      });
  }
  ngOnInit(): void {
    console.log("view");
  
  
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
  submit(Formvalue:any){
    const  userData = JSON.parse(localStorage.getItem('obj1') || '{}');
    console.log(userData);
    
       const expense = {
      "home":Formvalue.home,
      "food":Formvalue.food,
      "cloth":Formvalue.cloth,
      "eb_bill":Formvalue.eb_bill,
      "education":Formvalue.education,
      "EMI":Formvalue.EMI,
      "entertainment":Formvalue.entertainment,
      "transport":Formvalue.transport,
      "health":Formvalue.health,
      "expenseall":Formvalue.expenseall,
      "month":Formvalue.month,
      type:"expense",
      user:userData.id,
    }
   
       this.api.add("finance_db",expense).subscribe(res=>{
        console.log(res);
      this.alert.showSuccess("success","Expense Created Successfully")
        
        this.formgroup.reset();
      },rej=>{
      this.alert.showError("expense cant create","error" + rej);

      });
    }
    userExpenseValue = {
 
      "details" : this.expense
     
     }
     
     AddExpense(userbudgetValue:any){
     console.log(userbudgetValue);
  this.result = userbudgetValue.home + userbudgetValue.food +userbudgetValue.cloth + userbudgetValue.eb_bill +userbudgetValue.entertainment+ userbudgetValue.education+userbudgetValue.EMI+userbudgetValue.transport+userbudgetValue.health;
     
this.formgroup.controls['expenseall'].setValue(this.result);

}
}





  



  

