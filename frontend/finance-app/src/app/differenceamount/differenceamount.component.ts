import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {apiService} from '../login.service';
 
@Component({
  selector: 'app-differenceamount',
  templateUrl: './differenceamount.component.html',
  styleUrls: ['./differenceamount.component.css']
})
export class DifferenceamountComponent implements OnInit {
  public  userId= JSON.parse(localStorage.getItem('obj1') || '{}');

formgroup!: FormGroup;

  expenseall !:number;
  alluserExpense: any;
// alluserExpense: any;
  alluserExpenseData: any;
  store: any = [];
  obj: any;
  Id: any;
  userData:any;
  alluser: any;
  alluserData: any;
  Formvalue: any;
  alluserBudgetData: any;
  budgetall!: number;
expenseValue!:number;
budgetValue!:number;

fetchValue={
  "expenseValue":"",
  "budgetValue":"",
}
// public alluserExpenseData = this.alluserExpense.docs;

  constructor(private api:apiService,private fb:FormBuilder) {
    this.formgroup = this.fb.group({
      month: [''],
      differencevalue:['']
     
          });
   
   }

  ngOnInit(): void {
  }
  // this.getBudget();
  // this.getExpense();
  get month(){
    return this.formgroup.get('month')!;
  }
           
  getBudget(Formvalue:any){
  
    let data={
      selector:{
        "type": "budget",
         "user": this.userId.id,
         "month":Formvalue.month
      }}
      this.api.fetchDetails(data).subscribe(res =>{
        console.log(res);
        this.alluser = res;
           this.alluser=this.alluser.docs
           this.alluserBudgetData=this.alluser

           this.fetchValue.budgetValue=this.alluserBudgetData[0].budgetall;

           console.log(this.alluserBudgetData);

           if(this.alluserBudgetData.month == Formvalue.month){
            alert("Your budget data was got successfully!"+data);

          }
          //  let budgetValue = this.alluserBudgetData[0].budgetall;
          //  let budgetValue1 = this.alluserBudgetData[1].budgetall;
          //  console.log(budgetValue);
          //  console.log(budgetValue1);
          //    alert("Your  budget data was got successfully!");
         

      },rej=>{
        alert("opps! Can not able "+rej);
      });
   }

     getExpense(Formvalue:any) {
      let data={
        selector:{
          "type": "expense",
           "user": this.userId.id,
        }}
        
        this.api.fetchDetails(data).subscribe(res =>{
          console.log(res);
       
          this.alluserExpense = res;
           this.alluserExpense=this.alluserExpense.docs
           this.alluserExpenseData=this.alluserExpense

           this.fetchValue.expenseValue=this.alluserExpenseData[0].expenseall;

           console.log(this.alluserExpenseData);

           console.log(this.alluserExpenseData[0].expenseall);

           if(this.alluserExpenseData.month == Formvalue.month){
            alert("Your expense data was got successfully!"+data);

          }
            //  .map((el:any)=>el.doc);
  
            //  for(const array in this.alluserData){
            //    console.log(this.alluserData[array]);
            //  }
          
          // alert("You data got  successfully!"+ data);
        },rej=>{
          alert("opps! you dont have expense on that month "+rej);
        });
     }
     calculateDifference() {
let difference =   parseInt(this.fetchValue.expenseValue )- parseInt(this.fetchValue.budgetValue);

console.log( "difference"+difference);
alert("your difference amonut is "+difference);

     }
 
  }




