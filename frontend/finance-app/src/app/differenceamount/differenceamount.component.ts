import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ApiService} from '../login.service';
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
  differenceamount :any =[];
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

  constructor(private api:ApiService,private fb:FormBuilder,private toastr:ToastrService) {
    this.formgroup = this.fb.group({
      month: [''],
      differencevalue:['']
     
          });
      console.log(this.budgetDetails);

   
   }

  ngOnInit(): void {
    console.log("view");
  }

  get month(){
    return this.formgroup.get('month')!;
  }
 
           
  
     calculateDifference(a:any,b:any) {
    
    console.log(a,b)
    return (a-b);
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
            this.toastr.error("cant process","fail" + rej)
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
           resolve(this.alluserExpense1) 

        }
        ,rej=>{
          this.toastr.error("opps! you dont have expense on that month ","fail" + rej);
        });
      });
    }

loadData =false
     async fetchRecords(Formvalue:any){
       await this.getBudget1(Formvalue).then((res:any)=>{
        this.budgetDetails = res[0];
       
         this.getExpense1(Formvalue).then((response:any)=>{
          this.expenceDetails = response[0];

          this.loadData=true
          this.barData = [  
            ['Home',this.budgetDetails['home'] ,this.expenceDetails['home']],
            ['Food', this.budgetDetails['food'],this.expenceDetails['food']], 
            ['EB_bill', this.budgetDetails['cloth'],this.expenceDetails['cloth']], 
            ['Cloth', this.budgetDetails['eb_bill'],this.expenceDetails['eb_bill']],  
            ['Education',this.budgetDetails['education'],this.expenceDetails['education']],  
            ['EMI', this.budgetDetails['EMI'],this.expenceDetails['EMI']]  ,
            ['Entertainment', this.budgetDetails['entertainment'],this.expenceDetails['entertainment']]  ,
            ['Transport', this.budgetDetails['transport'],this.expenceDetails['transport']]  ,
            ['Health', this.budgetDetails['health'],this.expenceDetails['health']]  
           
            
         ];
         })

       })
       
      }


      title = 'googlechart';  
     myType:any = 'ColumnChart';  
      barData :any;   
     
     width = 1200;  
     height = 300; 
      options = {
      title: 'Graph on Budget and Expense lists',

      hAxis: {
        title: 'Categories',
        viewWindow: {
          min: [7, 30, 0],
          max: [20, 30, 0]
        }
      },
      vAxis: {
        title: 'Amount (Rupees)'
      }
    };
    
  }




