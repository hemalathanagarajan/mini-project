import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {apiService} from '../login.service';
import  {rangeValidator}  from './validator';

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
  constructor(private fb: FormBuilder,private api:apiService) { 
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
  //---angular-couch connection 
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
    // const  userData = JSON.parse(localStorage.getItem('obj1') || '{}');
    // console.log(userData);
    // console.log(userData.id);
    // const Id=userData.id;
    // console.log(Id);
       this.api.add("finance_db",expense).subscribe(res=>{
        console.log(res);
        
        alert("Your expense was posted successfully!");
        this.formgroup.reset();
      },rej=>{
        alert("opps! Can not post data"+rej);
      });
    }
    

      Viewdata() {
      
       this.api.get("finance_db").subscribe(res=>{
            console.log(res);
            this.alluser = res;
            this.alluser=this.alluser.rows
            this.alluserData=this.alluser.map((el:any)=>el.doc)
            console.log(this.alluserData)
        // this.alluser = res;
        //    this.alluser = this.alluser.rows;
        //    this.alluserData = this.alluser.map((el: any) => el.doc);
        //    console.log(this.alluserData[0]);
        //    this.api.array(this.alluserData);
        //    this.expense.store(this.alluserData);
        

            alert("Your data was posted successfully!");
            this.formgroup.reset();
          },rej=>{
            alert("opps! Can not post data"+rej);
          });
        }

        // ViewbyId() {
        //   this.api.getDocsByID("finance_db",this.idValue).subscribe(res=>{
        //     console.log(res);
        //     alert("your docs by id was success");
        //   },rej=>{
        //     alert("oops!"+rej);
        //   });
        // }



        // this.api.updateData(this.formgroup.value, "fresher-sample", 'af06fead1ad5393fa13ada637526c0fb',this.idform.rev.value).subscribe((datas) => {
        //     console.log(datas);
        //   });


   


//-----

AddExpense(home:string,food:string,cloth:string,eb_bill:string,education:string,EMI:string,entertainment:string,transport:string,health:string){
this.result =parseInt(home) + parseInt(food)+parseInt(cloth)+parseInt(eb_bill)+parseInt(education)+parseInt(EMI)+parseInt(entertainment)+parseInt(transport)+parseInt(health);
this.formgroup.controls['expenseall'].setValue(this.result);

}
}





  



  

