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

  public budgetDetails: any= [];
  public expenceDetails: any= [];

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
difference:number|undefined

differencearr : any = []
trail:any = [];
budget : any;
expense  :any;

// fetchBudgetValue={
//   "budgetValue": 0,
//   "homebudget":0,
//   "foodbudget":0,
//   "clothbudget":0,
//   "eb_billbudget":0,
//   "educationbudget":0,
//   "EMIbudget":0,
//   "entertainmentbudget":0,
//   "transportbudget":0,
//   "healthbudget":0,
//   // "expensefood":"",
// }
// fetchExpenseValue={
//   "expenseValue": 0,
//   "homeexpense":0,
//   "foodexpense":0,
//   "clothexpense":0,
//   "eb_billexpense":0,
//   "educationexpense":0,
//   "EMIexpense":0,
//   "entertainmentexpense":0,
//   "transportexpense":0,
//   "healthexpense":0,
  
// }
  userBudget: any;
  trailbudget: any;

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
 
           
  // getBudget(Formvalue:any){
  
  //   let data={
  //     selector:{
  //       "type": "budget",
  //        "user": this.userId.id,
  //        "month":Formvalue.month
  //     }}
  //     this.api.fetchDetails(data).subscribe(res =>{
  //       console.log(res);
  //       this.alluser = res;
  //          this.alluser=this.alluser.docs
  //          this.alluserBudgetData=this.alluser

  //         //  console.log("testbudget" ,this.alluserBudgetData);

  //         //  this.fetchBudgetValue.budgetValue=this.alluserBudgetData;
            
  //         //  console.log("BUDGET",this.alluserBudgetData);

  //         //  this.userBudget = this.alluserBudgetData[0].home;
           
          
  //          console.log(this.userBudget)
  //          this.budget = this.alluserBudgetData;
  //          console.log(this.budget);

  //          if(this.alluserBudgetData.month == Formvalue.month){
  //           alert("Your budget data was got successfully!"+data);

  //         }
          
  //     },rej=>{
  //       alert("opps! Can not able "+rej);
  //     });
  //  }

  //    getExpense(Formvalue:any) {
  //     let data={
  //       selector:{
  //         "type": "expense",
  //          "user": this.userId.id,
  //        "month":Formvalue.month

  //       }}
        
  //       this.api.fetchDetails(data).subscribe(res =>{
  //         console.log(res);
          
  //         this.alluserExpense = res;
  //          this.alluserExpense=this.alluserExpense.docs
  //          this.alluserExpenseData=this.alluserExpense
  //          console.log("test",this.alluserExpenseData);

  //          this.fetchExpenseValue.expenseValue=this.alluserExpenseData;
          
  //         //  console.log("expense total array",this.expenseValue);

  //          console.log("EXPENSE",this.alluserExpenseData);
  //          this.expense = this.alluserExpenseData;
  //          console.log(this.expense);

  //          console.log(this.alluserExpenseData[0].expenseall);
  //          if(this.alluserExpenseData.month == Formvalue.month){
  //           alert("Your expense data was got successfully!"+data);

  //         }
  //       },rej=>{
  //         alert("opps! you dont have expense on that month "+rej);
  //       });
  //    }
     calculateDifference(a:any,b:any) {
    //   for (let i = 0; i <= this.alluserBudgetData.length; i++) {
    //  this.differencearr[i] =  parseInt(this.alluserExpenseData[i])- parseInt(this.alluserBudgetData[i]);
     
    // //  console.log( "difference" +this.difference);
    // //  this.differencearr[i] = this.difference;
    // //  this.difference = 0;
    //   }
    console.log(a,b)
      console.log(Math.abs(a-b));
    return Math.abs(a-b);
     }


     getBudget1(Formvalue:any){
  
      let data={
        selector:{
          "type": "budget",
           "user": this.userId.id,
           "month":Formvalue.month
        }}
        return new Promise(resolve => {
          this.api.fetchDetails(data).subscribe(res =>{
            console.log(res);
            this.alluser = res;
               this.alluser=this.alluser.docs
               resolve(this.alluser) 
          },rej=>{
            alert("opps! Can not able "+rej);
          });
        });
     }

     getExpense1(Formvalue:any) {
      let data={
        selector:{
          "type": "expense",
          "user": this.userId.id,
          "month":Formvalue.month
        }}
        return new Promise(resolve => {this.api.fetchDetails(data).subscribe(res =>{
           console.log(res);
           this.alluserExpense = res;
           this.alluserExpense=this.alluserExpense.docs
           resolve(this.alluserExpense) 
        }
        ,rej=>{
          alert("opps! you dont have expense on that month "+rej);
        });
      });
    }


     async fetchBudgetExpence(Formvalue:any){
       await this.getBudget1(Formvalue).then(res=>{
        this.budgetDetails = res;
       })
       await this.getExpense1(Formvalue).then(res=>{
        this.expenceDetails = res;
       })
     }
 
  }




