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
import { HttpClientModule } from '@angular/common/http';
import {RouterModule,Routes} from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BudgetComponent } from './budget/budget.component';

const routes:Routes=[
  {path: '',component:HomeComponent},

  {path: 'register',component:RegisterUserComponent},
  {path: 'new-user',component:NewUserComponent},
  {path: 'contact',component:ContactFormComponent},
  {path: 'login',component:LoginComponent}
  // {path: 'books',component:BookCatlogComponent},
  // // {path:'addBook',component:BookformComponent}
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
