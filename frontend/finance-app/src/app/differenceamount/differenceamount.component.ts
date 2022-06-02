import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {apiService} from '../login.service';
import { ToastrService } from 'ngx-toastr'; 
 
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

  userBudget: any;
  trailbudget: any;
  alluser1: any = [];
  alluserExpense1: any=[];

  constructor(private api:apiService,private fb:FormBuilder,private toastr:ToastrService) {
    this.formgroup = this.fb.group({
      month: [''],
      differencevalue:['']
     
          });
   
   }

  ngOnInit(): void {
  }

  get month(){
    return this.formgroup.get('month')!;
  }
 
           
  
     calculateDifference(a:any,b:any) {
    
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
          this.api.fetchDetails(data).subscribe((res:any) =>{
            console.log(res);
            this.alluser = res['docs'];

            if(this.alluser && this.alluser.length > 0){
              this.alluser1=this.alluser
             }
            resolve(this.alluser1) 
          },rej=>{
            this.toastr.error("cant process","fail");
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
        return new Promise(resolve => {this.api.fetchDetails(data).subscribe((res:any) =>{
           console.log(res);
           this.alluserExpense = res['docs'];
           if(this.alluserExpense.length > 0){
            this.alluserExpense1=this.alluserExpense;
           }
          //  this.alluserExpense1=this.alluserExpense.docs
           resolve(this.alluserExpense1) 
        }
        ,rej=>{
          this.toastr.error("opps! you dont have expense on that month ","fail");
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




