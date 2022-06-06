import { Component,Input} from '@angular/core';
import {ApiService} from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  
@Input() idvalue: any;
alluser: any;
  userBudget: any;
  store: any = []
  obj: any;
  Id: any;
  userData:any;
  userExpense:any;
  userExpenseData:any=[];

public  userId= JSON.parse(localStorage.getItem('obj1') || '{}');

  
  constructor(private api:ApiService,private router:Router) {
    
    this.fetchExpenseDetails();
    this.fetchBudgetDetails();
   }

   fetchExpenseDetails(){

      this.api.fetchlist("expense",this.userId.id).subscribe(res =>{
        console.log(res);
        this.userExpense = res;
         this.userExpense=this.userExpense.rows
         this.userExpenseData = this.userExpense;
         this.userExpenseData = this.userExpense.map((el: any)=>el.doc);

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

        
           console.log(this.userBudget[0].doc);
         
          
         

      },rej=>{
        alert("opps! No records on budget "+rej);
      });
   }


 
  
  clear(){
localStorage.clear(); 
this.router.navigate([''])
    
  }
  chartType = 'line';

  chartDatasets = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  chartColors = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  chartOptions: any = {
    responsive: true
  };

  chartClicked(event: any) {
    console.log(event);
  }
  chartHovered(event: any) {
    console.log(event);
  }


 

}
