import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTab } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { HosplistService } from 'src/app/services/hosplist.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { hospitalObj } from '../../hospitalClass';
import { userObj } from 'src/app/userClass';

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.css']
})
export class AddhospitalComponent implements OnInit {
  currUser: userObj;
  hospAddForm: FormGroup;
  hospRemoveForm: FormGroup;
  hospList: hospitalObj[];

  constructor(private authService: UserService, private router: Router, private hospService: HosplistService, public nav: NavbarService, private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.currUser = authService.getLoggedUser();
    this.hospAddForm = this.fb.group({
      hospName: ['', Validators.required]

    });
    this.hospRemoveForm = this.fb.group({
      hospName: ['', Validators.required]
    });


  }

  ngOnInit(): void {
    if (!this.currUser.isAdmin) {
      this.router.navigate(['/**']);
    }
    else {
      this.nav.show();
      this.getAllHospitals();

    }
  }
  getAllHospitals() {
    this.hospService.getHospitals().subscribe((data: hospitalObj[]) => {
      this.hospList = data

    });
  }
  addHosp() {
    this.hospService.addHosp(this.hospAddForm.controls.hospName.value).subscribe(res => console.log(""));
    window.location.reload();
    this._snackBar.open("New hospital added successfully", "", {
      duration: 4000, panelClass: ['green-snackbar']
    });
  }
  removeHosp() {
    if (confirm("Are you sure you want to remove this hospital?")) {
      this.hospService.removeHosp(this.hospRemoveForm.controls.hospName.value).subscribe(res => console.log(""));
      window.location.reload();
      this._snackBar.open("Hospital removed successfully", "", {
        duration: 4000, panelClass: ['green-snackbar']
      });
    }

  }
}
