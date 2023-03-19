import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginForm2Component } from './login-form2/login-form2.component';
import { FormsModule } from '@angular/forms';
import { LoginFormTestComponent } from './login-form-test/login-form-test.component';
import { MatchPasswordDirective } from './directives/password-pattern.directive'


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginForm2Component,
    LoginFormTestComponent,
    MatchPasswordDirective,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
