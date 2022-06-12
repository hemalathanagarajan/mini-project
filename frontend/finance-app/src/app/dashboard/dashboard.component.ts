import { Component, OnInit} from '@angular/core';
import {ApiService} from '../login.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hide: number|undefined;
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    },1000);
    this.hide=0
  }
  button(){
this.hide=1;
  }
alluser: any;

  userBudget: any;
  store: any = []
  obj: any;
  Id: any;
  
  userData:any;
  userExpense:any;
  userExpenseData:any=[];

public  userId= JSON.parse(localStorage.getItem('obj1') || '{}');

  
  constructor(private api:ApiService,private router:Router,private spinner:NgxSpinnerService) {
    
    this.fetchExpenseDetails();
    this.fetchBudgetDetails();
   }
   update(_id:any,_rev:any){
     this.router.navigate(['edit'],{queryParams:{data:_id,_rev}})
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
},rej=>{
        alert("opps! No records on budget "+rej);
      });
   }


 
  
  clear(){
localStorage.clear(); 
this.router.navigate([''])
    
  }
 
  delete(id:any,rev:any){
    this.api.delete(id,rev).subscribe(res=>{
      console.log(res);
      alert("Deleted sucessfully");
      window. location. reload();

    })
  }
}
