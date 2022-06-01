import { Component, OnInit ,Input} from '@angular/core';
import {apiService} from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
@Input() idvalue: any;
alluser: any;
  userBudget: any;
  store: any = []
  obj: any;
  Id: any;
  userData:any;
  userExpense:any;
  userExpenseData:any=[];

// public userId = localStorage.getItem('obj1.id');
public  userId= JSON.parse(localStorage.getItem('obj1') || '{}');
  router: any;

  
  constructor(private api:apiService) {
    
    this.fetchExpenseDetails();
    this.fetchBudgetDetails();
   }
////--------------working view code-------------
  //  fetchExpenseDetails(){
    
  //     this.api.fetchDetailsofExpense("expense",this.userId.id).subscribe(res =>{
  //       console.log(res);
  //       this.alluserExpense = res;
  //        this.alluserExpense=this.alluserExpense.docs
  //        this.alluserExpenseData=this.alluserExpense
  //        console.log(this.alluserExpenseData);

          
  //     },rej=>{
  //       alert("opps! No records on expense"+rej);
  //     });
  //  }


   fetchExpenseDetails(){

      this.api.fetchlist("expense",this.userId.id).subscribe(res =>{
        console.log(res);
        this.userExpense = res;
         this.userExpense=this.userExpense.rows
         this.userExpenseData = this.userExpense;
         this.userExpenseData = this.userExpense.map((el: any)=>el.doc);
        //  this.userExpenseData=this.userExpenseData[0].doc;
        //  this.alluserExpenseData=this.alluserExpense
         console.log(this.userExpenseData);
        
          
      },rej=>{
        alert("opps! No records on expense"+rej);
      });
   }
   fetchBudgetDetails(){
    
      this.api.fetchlist("budget",this.userId.id).subscribe(res =>{
        console.log(res);
        this.alluser = res;
           this.alluser=this.alluser.rows
         this.userBudget = this.alluser.map((el: any)=>el.doc);

        //  this.userBudget = this.alluser;
         

          //  this.userBudget=this.alluser
           console.log(this.userBudget[0].doc);
         
          
         

      },rej=>{
        alert("opps! No records on budget "+rej);
      });
   }


  ngOnInit(): void {
  }
  
  clear(){
this.router.navigate(['']);
localStorage.clear(); 

    
  }

}
