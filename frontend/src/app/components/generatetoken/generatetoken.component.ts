import { Component, OnInit } from '@angular/core';
import { GentokenService } from '../../services/gentoken.service';
import { Router } from '@angular/router';
import { invT } from '../../inviteTokenClass';
import { v4 as uuid } from 'uuid';
import { userObj } from 'src/app/userClass';
import { UserService } from 'src/app/services/user.service';
import { HosplistService } from 'src/app/services/hosplist.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { hospitalObj } from 'src/app/hospitalClass';
@Component({
  selector: 'app-generatetoken',
  templateUrl: './generatetoken.component.html',
  styleUrls: ['./generatetoken.component.css']
})
export class GeneratetokenComponent implements OnInit {

  currinvT = new invT;
  currUser: userObj;
  hospitalList: String [];
  selectedHosp: String;
  hospList: hospitalObj[];

  constructor(private authService: UserService, private genTokenService: GentokenService, private router: Router, private hospListService:  HosplistService, public nav:NavbarService,private _snackBar: MatSnackBar) {
    this.currUser = this.authService.getLoggedUser();
   }
   getAllHospitals()
   {
     this.hospListService.getHospitals().subscribe((data: hospitalObj[]) => {
       this.hospList = data
       
     });
   }

  addinvT_Admin()
  {

    this.currinvT.token = uuid();
    this.currinvT.isAdmin = true;
    this.currinvT.Hospital = this.selectedHosp;

    this.genTokenService.addToken(this.currinvT).subscribe(()=> {
      this.router.navigate(['/gentoken']);
    });

  }
  addinvT()
  {

    this.currinvT.token = uuid();
    this.currinvT.isAdmin = false;
    this.currinvT.Hospital = this.selectedHosp;
    console.log(this.selectedHosp);
    console.log(this.currinvT);


    this.genTokenService.addToken(this.currinvT).subscribe(()=> {
    });

  }
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open("Copied", "", { duration: 3000, panelClass: ['green-snackbar'] });
  }

  ngOnInit(): void {
    if(!this.currUser.isAdmin)
    {
      this.router.navigate(['/**']);
    }
    else
    {
      this.nav.show();
      this.getAllHospitals();
    }
  }

}
