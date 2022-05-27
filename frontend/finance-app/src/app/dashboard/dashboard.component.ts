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
  alluserData: any;
  store: any = []
  obj: any;
  Id: any;
  userData:any;
  alluserExpense:any;
  alluserExpenseData:any;

// public userId = localStorage.getItem('obj1.id');
public  userId= JSON.parse(localStorage.getItem('obj1') || '{}');
  
  constructor(private api:apiService) {
    
    this.fetchExpenseDetails();
    this.fetchBudgetDetails();
   }

   fetchExpenseDetails(){
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
          //  .map((el:any)=>el.doc);
         console.log(this.alluserExpenseData);

          //  for(const array in this.alluserData){
          //    console.log(this.alluserData[array]);
          //  }


          //  alert("Your expense list was got successfully!");
        
        // alert("You data got  successfully!"+ data);
      },rej=>{
        alert("opps! No records on expense"+rej);
      });
   }

   fetchBudgetDetails(){
    let data={
      selector:{
        "type": "budget",
         "user": this.userId.id,
      }}
      this.api.fetchDetails(data).subscribe(res =>{
        console.log(res);
        this.alluser = res;
           this.alluser=this.alluser.docs
           this.alluserData=this.alluser
           console.log(this.alluserData);

          
        // this.alluserExpense = res;
        //  this.alluserExpense=this.alluserExpense.docs
        //  this.alluserExpenseData=this.alluserExpense
        // //  .map((el:any)=>el.doc[0]);

        // --uncomment this
        //  alert("Your budget list was got successfully!"+data);
         

        // alert("You data got  successfully!"+ data);
      },rej=>{
        alert("opps! No records on budget "+rej);
      });
   }


  ngOnInit(): void {
  }
  // Viewdata() {
      
  //   this.api.get("finance_db").subscribe(res=>{
  //        console.log(res);
  //        this.alluser = res;
  //        this.alluser=this.alluser.rows
  //        this.alluserData=this.alluser.map((el:any)=>el.doc)
  //        console.log(this.alluserData);
  //        alert("Your data was got successfully!");
  //           // this.formgroup.reset();
  //         },rej=>{
  //           alert("opps! Can not post data"+rej);
  //         });
  //       }
  

}
