import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {


  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log("view");
  
  }

}
