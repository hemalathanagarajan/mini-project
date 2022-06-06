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
import { DifferenceamountComponent } from './differenceamount/differenceamount.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpCallInterceptorService } from './http-call-interceptor.service';
import { ReviewComponent } from './review/review.component';
import { NgxLoadingModule } from 'ngx-loading';
import { BudgetingTipsComponent } from './budgeting-tips/budgeting-tips.component';
import { ExpenseDetailComponent } from './expense-detail/expense-detail.component';


const routes:Routes=[
  
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
    DifferenceamountComponent,
    FooterComponent,
    BlogComponent,
    ReviewComponent,
    BudgetingTipsComponent,
    ExpenseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxLoadingModule.forRoot({}),
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
