import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finance-app';

constructor(private router: Router) {
      const userData = localStorage.getItem('obj1')
      if (userData) {
        router.navigate(['dashboard']);
      }
    }
}