import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BudgetComponent } from './budget/budget.component';
import { BudgetingTipsComponent } from './budgeting-tips/budgeting-tips.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DifferenceamountComponent } from './differenceamount/differenceamount.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReviewComponent } from './review/review.component';
import {ExpenseDetailComponent} from './expense-detail/expense-detail.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: '',component:HomeComponent},

  {path: 'register',component:RegisterUserComponent},
  {path: 'new-user',component:NewUserComponent},
  {path: 'contact',component:ContactFormComponent},
  {path: 'login',component:LoginComponent},
  {path: 'about',component:AboutComponent},
  {path:'budget',component:BudgetComponent},
  {path:'expense',component:ExpenseListComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'difference',component:DifferenceamountComponent},
  {path:'blog',component:BlogComponent},
  {path:'reviews',component:ReviewComponent},
  {path:'budget-savings',component:BudgetingTipsComponent},
  {path:'expense-detail',component:ExpenseDetailComponent},
  {path:'edit',component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
