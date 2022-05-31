import { Component, OnInit ,EventEmitter} from '@angular/core';
import {FormGroup,FormBuilder,Validators, FormControl} from '@angular/forms';
import {apiService} from '../login.service';
import  {rangeValidator}  from './validator';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
formgroup!: FormGroup;
result!:number;
budgetall !:number;
budget: any = {
    
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
        location:'',
      
};
 



  constructor(private fb: FormBuilder,private api:apiService, private alert:NotificationService) { 
    this.formgroup = this.fb.group({
        home: ['',[Validators.required,rangeValidator(0,Infinity)]],
        food: ['',[Validators.required,rangeValidator(0,Infinity)]],
        cloth: ['',[Validators.required,rangeValidator(0,Infinity)]],
        eb_bill: ['', [Validators.required, rangeValidator(0,Infinity)]],
      
        education: ['',[Validators.required,rangeValidator(0,Infinity)]],
        EMI: ['',[Validators.required,rangeValidator(0,Infinity)]],
        entertainment: ['',[Validators.required,rangeValidator(0,Infinity)]],
        transport: ['',[Validators.required,rangeValidator(0,Infinity)]],
        health: ['',[Validators.required,rangeValidator(0,Infinity)]],
        budgetall: [''],
        month:[''],
        location:['']
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
get location(){
  return this.formgroup.get('location')!;
}


//------
// viewDetail(datas:any) {
//   console.log(this.formgroup.value);
  
//   this.api.fetchDetails(this.formgroup.value).subscribe(res =>{
//   console.log(res);
//   alert("You logged in successfully!");
// },rej=>{
//   alert("opps! Can not able to login"+rej);
// });
// }
//------------
  //---angular-couch connection 
  submit(Formvalue:any){
    const  userData = JSON.parse(localStorage.getItem('obj1') || '{}');
    console.log(userData);
      // console.log(formdata);
      // this.store.pushData(formdata);
       const budget = {
      "home":Formvalue.home,
      "food":Formvalue.food,
      "cloth":Formvalue.cloth,
      "eb_bill":Formvalue.eb_bill,
      "education":Formvalue.education,
      "EMI":Formvalue.EMI,
      "entertainment":Formvalue.entertainment,
      "transport":Formvalue.transport,
      "health":Formvalue.health,
      "budgetall":Formvalue.budgetall,
      "month":Formvalue.month,
      type:"budget",
      user:userData.id,
      
      

    }
      this.api.add("finance_db",budget).subscribe(res=>{
        console.log(res);
      this.alert.showSuccess("success","Data posted success Fully")
        
        // alert("Your budget was created successfully!");
        this.formgroup.reset();
      },
      rej=>{
      this.alert.showError("data cant post","error");
        
        // alert("opps! Can not post data"+rej);
      });







      // this.api.add("finance_db",budget).then((budget)=>{
      //   console.log(budget);
      //   alert("Your budget was created successfully!");
      //   this.formgroup.reset();
      // }).catch((()=>{
      //   console.log("");
      // }))
      

      // this.api.get("finance_db").subscribe(res=>{
      //       console.log(res);
      //       alert("Your data was posted successfully!");
      //       this.formgroup.reset();
      //     },rej=>{
      //       alert("opps! Can not post data"+rej);
      //     });




      //   // this.api.updateData(this.formgroup.value, "fresher-sample", 'af06fead1ad5393fa13ada637526c0fb',this.idform.rev.value).subscribe((datas) => {
        //     console.log(datas);
        //   });
}

// login_test(datas:any) {
//   const url=this.endpoint+'finance_db/_find';
//   let data ={ selector: {
//     email : datas.email,
//     password:datas.password
//   }},

// fields:["id","name","email"]
// return this.http.post(url,data,this.httpOptions)

// } 



AddBudget(homeAmount:string,foodAmount:string,clothAmount:string,eb_billAmount:string,educationAmount:string,EMIAmount:string,entertainmentAmount:string,transportAmount:string,healthAmount:string){
this.result =parseInt(homeAmount) + parseInt(foodAmount)+parseInt(clothAmount)+parseInt(eb_billAmount)+parseInt(educationAmount)+parseInt(EMIAmount)+parseInt(entertainmentAmount)+parseInt(transportAmount)+parseInt(healthAmount);
this.formgroup.controls['budgetall'].setValue(this.result);

}

valueChanged(event:Event) {
console.log(event);
}

}