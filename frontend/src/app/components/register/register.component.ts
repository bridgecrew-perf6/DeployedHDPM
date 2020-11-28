import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { invT } from '../../inviteTokenClass';
import { GentokenService } from '../../services/gentoken.service';
import { userObj } from '../../userClass';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { HosplistService } from '../../services/hosplist.service';
import { hospitalObj } from 'src/app/hospitalClass';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  registerForm: FormGroup;
  token: String;
  temp: String;
  tokenObj = new invT;
  user = new userObj;
  isAuthorized: boolean;
  hospitalList: String [];
  isAdmin: boolean;
  hospList: hospitalObj[];

  constructor(private hospListService: HosplistService, private userService: UserService, private tokenService: GentokenService, private fb: FormBuilder, private router: Router, private _activatedRoute: ActivatedRoute , private _snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      emailconfirm: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.min(8)]],
      n_ID: ['', [Validators.required]],
      contactInfo: ['', Validators.required],
    });
  }
  getAllHospitals()
  {
    this.hospListService.getHospitals().subscribe((data: hospitalObj[]) => {
      this.hospList = data
      
    });
  }

    ngOnInit(): void {
      this.userService.logOut();
      this.getToken();
      this.getAllHospitals();
  }
  getToken() {
    this._activatedRoute.params.subscribe(parameter => {
      this.token = parameter['token'];
    });
    this.getTokenObj();
  }
  getTokenObj()
  {
    this.tokenService.getToken(this.token).subscribe((data: invT) => {
      if(data == null)
      {
        this.router.navigate(['/**']);
      }
      else
      {
        this.isAuthorized = true;
        this.user.isAdmin = data.isAdmin;
        this.user.Hospital = data.Hospital; 
      }
    });
  }
  registerUser() {
    this.temp = this.registerForm.controls.email.value;
    this.temp = this.temp.toLowerCase();
    this.userService.getUserId(this.temp).subscribe((data: String) => {
      if(data)
      {
        this._snackBar.open("Error: User with matching email already exists","",{ duration: 4000, panelClass: ['red-snackbar']
      });
      }
      else if(!data)
      {
        if (this.registerForm.controls.emailconfirm.value == this.registerForm.controls.email.value) {
          this.user.firstName = this.registerForm.controls.firstName.value;
          this.user.lastName = this.registerForm.controls.lastName.value;
          this.user.email = this.registerForm.controls.email.value;
          this.user.password = this.registerForm.controls.password.value;
          this.user.n_ID = this.registerForm.controls.n_ID.value;
          this.user.contactInfo = this.registerForm.controls.contactInfo.value;
          this.user.email = this.user.email.toLowerCase();
          this.userService.regUser(this.user).subscribe(res => console.log(""));
          this.tokenService.deleteToken(this.token).subscribe(res => console.log(""));
          this.router.navigate(['/login']);
          this._snackBar.open("Registration was successful, please login.","", {duration: 4000, panelClass: ['green-snackbar']});
        }
        else
        {
          this._snackBar.open("Email confirmation mismatch","", {duration: 4000,});
        }
      }
    });
  }
  get emailInput() { return this.registerForm.get('email'); }
  get passwordInput() { return this.registerForm.get('password'); }

}
