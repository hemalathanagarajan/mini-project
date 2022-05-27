import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  formgroup!:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.formgroup = this.fb.group({
      location: ['',[Validators.required]],
  });
}

  ngOnInit(): void {
  }
  


}
