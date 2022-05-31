import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BudgetComponent } from './budget/budget.component';
import { AboutComponent } from './about/about.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LookupComponent } from './lookup/lookup.component';
import { DifferenceamountComponent } from './differenceamount/differenceamount.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './notification.service';
import { HttpCallInterceptorService } from './http-call-interceptor.service';
import { ReviewComponent } from './review/review.component';
// import { HttpCallInterceptorService } from './http-call-interceptor.service'; 
// import flatpickr from 'flatpickr';

const routes:Routes=[
  // {path: '',component:HomeComponent},

  // {path: 'register',component:RegisterUserComponent},
  // {path: 'new-user',component:NewUserComponent},
  // {path: 'contact',component:ContactFormComponent},
  // {path: 'login',component:LoginComponent},
  // {path: 'about',component:AboutComponent},
  // {path:'budget',component:BudgetComponent},
  // {path:'expense',component:ExpenseListComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'difference',component:DifferenceamountComponent},
  // {path:'blog',component:BlogComponent},
  // {path:'products',component:ProductsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ContactFormComponent,
    NewUserComponent,
    BudgetComponent,
    AboutComponent,
    ExpenseListComponent,
    DashboardComponent,
    LookupComponent,
    DifferenceamountComponent,
    FooterComponent,
    BlogComponent,
    ReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),


    RouterModule.forRoot(routes)
  ],
  providers: [ {provide: HTTP_INTERCEPTORS,
        useClass: HttpCallInterceptorService,
        multi: true
    
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
