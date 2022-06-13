import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl} from '@angular/forms';
import { ApiService } from '../login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private _id: any;
  formgroup!:FormGroup;
  rev: any;
  temp: any;
  type: any;
  router: any;

  constructor(private acrouter:ActivatedRoute,private login:ApiService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.acrouter.queryParams.subscribe(res => {
      console.log(res)
      this._id = res.data
      this.rev = res._rev
      this.login.getbyId(this._id).subscribe(response => {
        this.temp = response

        console.log(this.temp)
        console.log(this.formgroup)
        this.setValueToForm()
      })
    })
  }




editData(doc:any){
  console.log(doc)
    this.type = "budget"
    doc['type'] = this.type
    doc['user'] = localStorage.getItem('obj1')
    this.login.updateDataUser(doc, this.temp._id, this.temp._rev).subscribe(res => {
      console.log(res)
      this.toastr.success("Your Date edited successfully", "Edited Successfully ")
      this.router.navigate(['dashboard'], { queryParams: { data: localStorage.getItem('obj1') } })
    },_rej => {
      this.toastr.error("data cant be deleted", "Updation Failed")
    })

  }
    

  formGroup = new FormGroup({
  month: new FormControl(''),
  home: new FormControl(''),
  food: new FormControl(''),
  cloth: new FormControl(''),
  eb_bill: new FormControl(''),
  education: new FormControl(''),
  EMI: new FormControl(''),
  entertainment: new FormControl(''),
  transport: new FormControl(''),
  health: new FormControl(''),

});
setValueToForm() {
  this.formgroup.setValue({ month: this.temp.month, home: this.temp.home, food: this.temp.food, cloth: this.temp.cloth, eb_bill: this.temp.eb_bill,education : this.temp.education, EMI: this.temp.EMI ,entertainment: this.temp.entertainment ,transport: this.temp.transport,health: this.temp.health  })
}
}
