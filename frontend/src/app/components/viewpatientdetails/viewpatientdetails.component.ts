import { Component, HostListener, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { PatientObj } from '../../patientClass';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTab } from '@angular/material/tabs';
import { MatExpansionPanel } from '@angular/material/expansion';
import { NavbarService } from 'src/app/services/navbar.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-viewpatientdetails',
  templateUrl: './viewpatientdetails.component.html',
  styleUrls: ['./viewpatientdetails.component.css']
})
export class ViewpatientdetailsComponent implements OnInit {
  @HostListener('window:keydown', [`$event`]) spaceEvent(event: any) {
    if(event.keyCode == 39 && this.page != 9)
    {
      this.nextPage();
    }
    else if(event.keyCode == 37 && this.page != 1)
    {
      this.prevPage();
    }

  }
  currPatient = new PatientObj;
  id: String;
  currDate = this.reverseDate(new Date().toISOString().split('T')[0]);
  panelOpenState: false;
  dofDialysis: String;
  dofAC: String;
  dofLab: String;
  dOfHepBV: String;
  dOfInfV: String;
  page: any;
  pageNextDisabled: boolean;
  pagePreviousDisabled: boolean;


  constructor(public nav: NavbarService, private patientSrvc: PatientService, private router: Router, private _activatedRoute: ActivatedRoute) {
    this.page = 1;
  }


  ngOnInit(): void {
    this.nav.show();
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter['id'];
    })
    this.getPDetails();

  }
  changePage(PageNum: Number) {
    this.page = PageNum;

  }

  getPDetails() {
    this.patientSrvc.getPatientById(this.id).subscribe((data: PatientObj) => {
      this.currPatient = data;
      this.dofDialysis = this.reverseDate(this.currPatient.dosDialysis.substring(0, 10));
      this.dofAC = this.reverseDate(this.currPatient.dOfAccessCreation.substring(0, 10));
      this.dofLab = this.reverseDate(this.currPatient.labDate.substring(0, 10));
      if (this.currPatient.HepBVDate) {
        this.dOfHepBV = this.reverseDate(this.currPatient.HepBVDate.substring(0, 10));
      }
      if (this.currPatient.InfVDate) {
        this.dOfInfV = this.reverseDate(this.currPatient.InfVDate.substring(0, 10));
      }


    });
  }
  nextPage() {
    if (this.page == 8) {
      this.pageNextDisabled = true;
      this.page = this.page + 1;
    }
    else {
      this.page = this.page + 1;
      if(this.page == 2)
      {
        this.pagePreviousDisabled = false;
      }
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  prevPage() {
    if (this.page == 2) {
      this.pagePreviousDisabled = true;
      this.page = this.page - 1;

    }
    else {
      this.page = this.page - 1;
      if (this.page == 8) {
        this.pageNextDisabled = false;
      }
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  reverseDate(str: String) {
    return str.split("-").reverse().join("-");
  }
}

