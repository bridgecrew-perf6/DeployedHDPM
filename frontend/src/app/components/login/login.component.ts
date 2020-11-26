import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { apiRes } from '../../apiResClass';
import { NavbarService } from 'src/app/services/navbar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginEmail: String;
  loginPass: String;
  data: apiRes;
  hide = true;
  alert:boolean;
 

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder, public nav:NavbarService) {
    this.alert = false;
    this.loginForm = this.fb.group({
      Email: ['', [Validators.email, Validators.required]],
      Password: ['', [Validators.required]]
    })

   }

  ngOnInit(): void {
    this.nav.hide();
    this.userService.logOut();
  }
  dismissAlert()
  {
    this.alert = false;
  }
  loginUser() 
  {
    this.loginEmail = this.loginForm.controls.Email.value;
    this.loginEmail = this.loginEmail.toLowerCase();
    this.loginPass = this.passwordInput.value;
    const userlogin = {
      email: this.loginEmail,
      password: this.loginPass
    }
    this.userService.authUser(userlogin).subscribe((data) => {
      if((data as any).success)
      {
        this.userService.storeUserData((data as any).token, (data as any).user);
        this.router.navigate(['/list']);
      }
      else
      {
        console.log(data);
        this.alert = true;
      }
    });
  }
  get passwordInput() { return this.loginForm.get('Password'); }

}
