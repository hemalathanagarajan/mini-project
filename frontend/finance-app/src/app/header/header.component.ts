import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userData = localStorage.getItem('obj1')
        
  }
//   check(nav:any){
//     this.userData = localStorage.getItem('obj1')
// if(this.userData && nav === "Dashboard"){
//   this.router.navigate([nav])
// }
// if(  nav !== "Dashboard"){
//   this.router.navigate([nav])
// }
//   }
}
