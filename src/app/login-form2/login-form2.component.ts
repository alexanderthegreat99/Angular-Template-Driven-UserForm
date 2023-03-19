import { Component, ViewChild, Renderer2, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login-form2',
  templateUrl: './login-form2.component.html',
  styleUrls: ['./login-form2.component.css']
})
export class LoginForm2Component implements OnInit {
  //@ViewChild('myLoginForm') form1: NgForm;
  //@ViewChild('mySignupForm') form2: NgForm;
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }
  loginObj: any = {
    email: '',
    password: '',
  }/*
  */
  @ViewChild('loginRef', { static: true }) sliderContainer!: ElementRef;
  @ViewChild('titleRef', { static: true }) titleContainer!: ElementRef;
  constructor(private renderer: Renderer2) { }
  ngOnInit(): void {
    
      const localData =localStorage.getItem('signUpUsers');
      if(localData != null){
        this.signupUsers = JSON.parse(localData);
      }
      console.log("After setting local data : " + this.signupUsers);
    
  }
  ngAfterViewInit() {
    // Access the DOM element using ViewChild
    this.sliderContainer = this.sliderContainer.nativeElement;
    this.titleContainer = this.titleContainer.nativeElement;
  
    // Set the initial marginLeft style
    
  }
  
  onLoginClick() {
    // Get the slider container element and set its marginLeft to -50%
    
    //this.renderer.setStyle(this.sliderContainer, 'marginLeft', '-50%');
    this.renderer.setStyle(this.sliderContainer, 'marginLeft', '0');
    this.renderer.setStyle(this.titleContainer, 'marginLeft', '0');
    this.renderer.setAttribute(document.getElementById('login'), 'checked', 'true');
  this.renderer.removeAttribute(document.getElementById('signup'), 'checked');
    console.log(this.sliderContainer );
    console.log("login clicked" );
  }

  onSignupClick() {
    // Get the slider container element and set its marginLeft to 0
    
    //this.renderer.setStyle(this.sliderContainer, 'marginLeft', '0');
    this.renderer.setStyle(this.sliderContainer, 'marginLeft', '-100%');
    this.renderer.setStyle(this.titleContainer, 'marginLeft', '-100%');
    this.renderer.setAttribute(document.getElementById('signup'), 'checked', 'true');
  this.renderer.removeAttribute(document.getElementById('login'), 'checked');
    console.log(this.sliderContainer );
    console.log("signup clicked" );
  }
  /*signupBtn.onclick = () => {
    const formElement = this.elementRef.nativeElement.querySelector('form');
    this.renderer.setStyle(formElement, 'marginLeft', '10px');
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  };
  
  loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  };
  
  signupLink.onclick = () => {
    signupBtn.click();
    return false;
  };*/
  
  
  /*onSignUp(){
    
    this.signupUsers.push(this.signupObj)
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    console.log(this.signupObj);
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
    console.log(this.signupUsers);
    alert('User Signed Up Successfully');
  
  }*/
  /*onSignUp(){
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExist === undefined) {
    this.signupUsers.push(this.signupObj)
    localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
    console.log(this.signupObj);
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
    console.log(this.signupUsers);
    alert('User Signed Up Successfully');
  } else{
    alert('User already exists');
  }
  }
  /*onSignUp(){
   const isUserExist = this.signupUsers.find(m => m.email === this.loginObj.email && m.password === this.loginObj.password);

if (isUserExist === undefined) {
  // user doesn't exist, so add the new user object to the array and store it in local storage
  console.log("Before :" + this.signupUsers);
  this.signupUsers.push(this.signupObj);
  console.log("After :" + this.signupUsers);
 localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));

  // log the new user object and reset the signupObj to empty values
  
  console.log(this.signupObj);
  
 alert('User Signed Up Successfully');
  this.signupObj = {
    userName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };
  

  //send an alert message to indicate success
  
} else {
  // user already exists, so send an alert message
  alert('User already exists');
}
  }
*/
  onLogin(){
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExist != undefined) {
      alert('User Login Successfully' + isUserExist);
    } else{
      alert('Wrong credentials' + isUserExist);
    }
  }
  onSubmit(form: NgForm){
    
    const isUserExist = this.signupUsers.find(m => m.email === this.loginObj.email && m.password === this.loginObj.password);
    console.log(form);
    if (isUserExist === undefined) {
      // user doesn't exist, so add the new user object to the array and store it in local storage
      console.log(this.signupUsers);
      console.log(this.signupObj);
      this.signupUsers.push(...this.signupObj);
      console.log( this.signupUsers);
      console.log(this.signupObj);
      localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
     // console.log(this.signupUsers);
      //console.log(form)
    //form.reset();
    setTimeout(() => {
      alert('User Signed Up Successfully');
    }, 10); 
    }else{
      alert('User already exists');
    }
    
}
  
  //onSubmit(){
 //   console.log(this.form)
//  }
}
