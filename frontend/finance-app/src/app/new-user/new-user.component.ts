import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  // formValue !: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.formValue = this.formbuilder.group({
    //   firstName  : [''],
    //   lastName : [''],
    //   email : [''],
    //   mobile : [''],
    //   salary : ['']
    // })
  
  }

}
