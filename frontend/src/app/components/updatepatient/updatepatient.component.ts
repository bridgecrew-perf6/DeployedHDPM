import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { hospitalObj } from 'src/app/hospitalClass';
import { NavbarService } from 'src/app/services/navbar.service';
import { PatientService } from 'src/app/services/patient.service';
import { UserService } from 'src/app/services/user.service';
import { userObj } from 'src/app/userClass';
import { PatientObj } from '../../patientClass';
import { HosplistService } from '../../services/hosplist.service';
@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.css']
})
export class UpdatepatientComponent implements OnInit {
  currPatient = new PatientObj();
  updatedP = new PatientObj();
  id: String;
  updateForm: FormGroup;
  cMorbHyp: boolean;
  cMorbDM: boolean;
  cMorbIHD: boolean;
  cMorbE: boolean;
  SelectedCMorbOther: boolean;
  //Complication checks
  CompIns: boolean;
  CompInf: boolean;
  CompAD: boolean;
  CompDC: boolean;
  SelectedCompOther: boolean;
  //Dialysis Comp checks

  DCHA: boolean;
  DCHypot: boolean;
  DCHypog: boolean;
  DCHyper: boolean;
  DCMC: boolean;
  DCAC: boolean;
  DCV: boolean;
  DCSZ: boolean;
  DCHS: boolean;
  DCIH: boolean;
  SelectedDCOther: boolean;
  hospList: hospitalObj[];
 countryList: String[] = [
   "Saudi",
   "Non-Saudi"
 ]
  hospitalList: String[];
  currUser: userObj;

  constructor(public nav: NavbarService, private authService: UserService,private hospListService: HosplistService, private fb:FormBuilder, private pService: PatientService, private router: Router, private _activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar) {
    this.currUser = this.authService.getLoggedUser();
    this.updateForm = this.fb.group({
      fullName:['',Validators.required],
      fullNameAr:[''],
      Age:['',Validators.required],
      Height:['',Validators.required],
      bldGrp:['', Validators.required],
      kAllergies:['', Validators.required],
      Hospital:['',Validators.required],
      contactInfo: ['',Validators.required],
      Gender: ['',Validators.required],
      n_ID: ['',Validators.required],
      Nationality: ['', Validators.required],
      submittedBy: ['', Validators.required],
      dosDialysis: ['', Validators.required],
      oKidneyDisease: ['', Validators.required],
      otherKD : [''],
      surgHist1: [''],
      surgHist2: [''],
      coMorbidityOther: [''],
      previousTr: ['', Validators.required],
      prevTrGS :[''],
      fitForTr: [''],
      fitForTrReason: [''],
      potentialRDonors: ['', Validators.required],
      currentAccess1: ['', Validators.required],
      currentAccess2: [''],
      currentAccess3: [''],
      dOfAccessCreation: ['', Validators.required],
      ComplicationOther: [''],
      previousAccess1: [''],
      previousAccess2: [''],
      previousAccess3: [''],
      previousAccess4: [''],
      Frequency: ['', Validators.required],
      Duration: ['', Validators.required],
      Dialyser: ['', Validators.required],
      antiCoag: ['', Validators.required],
      hInit: [''],
      hMaint: [''],
      LMWHval: [''],
      antiCoReason: [''],
      dryWt: ['', Validators.required],
      avgWtGain: ['', Validators.required],
      avgBP: ['', Validators.required],
      avgPulse: ['', Validators.required],
      dialAdeq: ['', Validators.required],
      dCompOther: [''],
      labDate: ['', Validators.required],
      cbcHB: ['', Validators.required],
      cbcWBC: ['', Validators.required],
      cbcPlatelets: ['', Validators.required],
      chemCre: ['', Validators.required],
      chemUrea: ['', Validators.required],
      chemSod: ['', Validators.required],
      chemPot: ['', Validators.required],
      chemCal: ['', Validators.required],
      chemPhos: ['', Validators.required],
      chemAST: ['', Validators.required],
      chemALT: ['', Validators.required],
      chemAlb: ['', Validators.required],
      chemMag: ['', Validators.required],
      chemAlph: ['', Validators.required],
      chemOther: [''],
      Siron: ['', Validators.required],
      TIBC: ['', Validators.required],
      Sferitin: ['', Validators.required],
      TSAT: ['', Validators.required],
      hormPTH: ['', Validators.required],
      hormVITD: ['', Validators.required],
      hormOther: [''],
      hbsAg: ['', Validators.required],
      hcvAb: ['', Validators.required],
      hcvPCR: [''],
      hivI_II: ['', Validators.required],
      otherSer: [''],
      coagPT: ['',Validators.required],
      coagPPT: ['', Validators.required],
      coagINR: ['', Validators.required],
      cMD1: ['', Validators.required],
      cMD2: ['', Validators.required],
      cMD3: ['', Validators.required],
      cMD4: [''],
      cMD5: [''],
      cMD6: [''],
      cMD7: [''],
      cMD8: [''],
      cMD9: [''],
      cMD10: [''],
      cMD11: [''],
      cMD12: [''],
      cMD13: [''],
      cMD14: [''],
      cMD15: [''],
      cMD16: [''],
      HepBV: [''],
      HepBVDate: [''],
      InfV: [''],
      InfVDate: [''],
      otherVAC: [''],
      progNotes: [''],
      consNotes: ['']

    });
   }

  ngOnInit(): void {
    if(!this.isUserAuthorized())
    {
      this.router.navigate(['/**']);
    }
    this._activatedRoute.params.subscribe(parameter => {
      this.id = parameter['id'];
    });
    this.getAllHospitals();
    this.getPDetails();

    
  }
  getAllHospitals()
  {
    this.hospListService.getHospitals().subscribe((data: hospitalObj[]) => {
      this.hospList = data
      
    });
  }
  isUserAuthorized()
  {
    if(this.currUser.isAdmin || this.currUser.Hospital == this.currPatient.Hospital)
    {
      this.nav.show();
      return true;
    }
    else
    {
      return false;
    }
  }


  getPDetails()
  {
    this.pService.getPatientById(this.id).subscribe((data: PatientObj) => {
      this.currPatient = data;
      this.assignPat();
    });
  }
  assignPat()
  {
    this.updateForm.get('fullName').setValue(this.currPatient.fullName);
    this.updateForm.get('fullNameAr').setValue(this.currPatient.fullNameAr);
    this.updateForm.get('Age').setValue(this.currPatient.Age);
    this.updateForm.get('Height').setValue(this.currPatient.Height);
    this.updateForm.get('bldGrp').setValue(this.currPatient.bldGrp);
    this.updateForm.get('kAllergies').setValue(this.currPatient.kAllergies);
    this.updateForm.get('Hospital').setValue(this.currPatient.Hospital);
    this.updateForm.get('contactInfo').setValue(this.currPatient.contactInfo);
    this.updateForm.get('Gender').setValue(this.currPatient.Gender);
    this.updateForm.get('n_ID').setValue(this.currPatient.n_ID);
    this.updateForm.get('Nationality').setValue(this.currPatient.Nationality);
    this.updateForm.get('submittedBy').setValue(this.currPatient.submittedBy);
    this.updateForm.get('dosDialysis').setValue(this.currPatient.dosDialysis);
    this.updateForm.get('oKidneyDisease').setValue(this.currPatient.oKidneyDisease);
    this.updateForm.get('otherKD').setValue(this.currPatient.otherKD);
    this.updateForm.get('surgHist1').setValue(this.currPatient.surgHist1);
    this.updateForm.get('surgHist2').setValue(this.currPatient.surgHist2);
    this.cMorbHyp = this.currPatient.morbHype;
    this.cMorbDM = this.currPatient.morbDM;
    this.cMorbE = this.currPatient.morbEpi;
    if(this.currPatient.coMorbOther != null)
    {
      this.SelectedCMorbOther = true;
      this.updateForm.get('coMorbidityOther').setValue(this.currPatient.coMorbOther);
    }

    this.updateForm.get('previousTr').setValue(this.currPatient.previousTr);
    this.updateForm.get('prevTrGS').setValue(this.currPatient.prevTrGS);
    this.updateForm.get('fitForTr').setValue(this.currPatient.fitForTr);
    this.updateForm.get('fitForTrReason').setValue(this.currPatient.fitForTrReason);
    this.updateForm.get('potentialRDonors').setValue(this.currPatient.potentialRDonors);
    this.updateForm.get('currentAccess1').setValue(this.currPatient.currentAccess1);
    this.updateForm.get('currentAccess2').setValue(this.currPatient.currentAccess2);
    this.updateForm.get('currentAccess3').setValue(this.currPatient.currentAccess3);
    this.updateForm.get('dOfAccessCreation').setValue(this.currPatient.dOfAccessCreation);
    this.CompIns = this.currPatient.compInsuf;
    this.CompInf = this.currPatient.compInf
    this.CompAD = this.currPatient.compAD;
    this.CompDC = this.currPatient.compDC;
    if(this.currPatient.compOther != null)
    {
      this.SelectedCompOther = true;
      this.updateForm.get('ComplicationOther').setValue(this.currPatient.compOther);
    }
    this.updateForm.get('previousAccess1').setValue(this.currPatient.previousAccess1);
    this.updateForm.get('previousAccess2').setValue(this.currPatient.previousAccess2);
    this.updateForm.get('previousAccess3').setValue(this.currPatient.previousAccess3);
    this.updateForm.get('previousAccess4').setValue(this.currPatient.previousAccess4);
    this.updateForm.get('Frequency').setValue(this.currPatient.Frequency);
    this.updateForm.get('Duration').setValue(this.currPatient.Duration);
    this.updateForm.get('Dialyser').setValue(this.currPatient.Dialyser);
    this.updateForm.get('antiCoag').setValue(this.currPatient.antiCoagulation);
    this.updateForm.get('hInit').setValue(this.currPatient.hInit);
    this.updateForm.get('hMaint').setValue(this.currPatient.hMaint);
    this.updateForm.get('LMWHval').setValue(this.currPatient.LMWHval);
    this.updateForm.get('antiCoReason').setValue(this.currPatient.antiCoReason);
    this.updateForm.get('dryWt').setValue(this.currPatient.dryWt);
    this.updateForm.get('avgWtGain').setValue(this.currPatient.avgWtGain);
    this.updateForm.get('avgBP').setValue(this.currPatient.avgBP);
    this.updateForm.get('avgPulse').setValue(this.currPatient.avgPulse);
    this.updateForm.get('dialAdeq').setValue(this.currPatient.dialAdeq);
    this.DCHA = this.currPatient.dCompHead;
    this.DCHypot = this.currPatient.dCompHOT;
    this.DCHypog = this.currPatient.dCompHG;
    this.DCHyper = this.currPatient.dCompHET;
    this.DCMC = this.currPatient.dCompMC;
    this.DCAC = this.currPatient.dCompAC;
    this.DCV = this.currPatient.dCompVom;
    this.DCSZ = this.currPatient.dCompSZ;
    this.DCHS = this.currPatient.dCompHS;
    this.DCIH = this.currPatient.dCompIt;
    if(this.currPatient.dCompOther != null)
    {
      this.SelectedDCOther = true;
      this.updateForm.get('dCompOther').setValue(this.currPatient.dCompOther);
    }
    this.updateForm.get('labDate').setValue(this.currPatient.labDate);
    this.updateForm.get('cbcHB').setValue(this.currPatient.cbcHB);
    this.updateForm.get('cbcWBC').setValue(this.currPatient.cbcWBC);
    this.updateForm.get('cbcPlatelets').setValue(this.currPatient.cbcPlatelets);
    this.updateForm.get('chemCre').setValue(this.currPatient.chemCre);
    this.updateForm.get('chemUrea').setValue(this.currPatient.chemUrea);
    this.updateForm.get('chemSod').setValue(this.currPatient.chemSod);
    this.updateForm.get('chemPot').setValue(this.currPatient.chemPot);
    this.updateForm.get('chemCal').setValue(this.currPatient.chemCal);
    this.updateForm.get('chemPhos').setValue(this.currPatient.chemPhos);
    this.updateForm.get('chemAST').setValue(this.currPatient.chemAST);
    this.updateForm.get('chemALT').setValue(this.currPatient.chemALT);
    this.updateForm.get('chemAlb').setValue(this.currPatient.chemAlb);
    this.updateForm.get('chemMag').setValue(this.currPatient.chemMag);
    this.updateForm.get('chemAlph').setValue(this.currPatient.chemAlph);
    this.updateForm.get('chemOther').setValue(this.currPatient.chemOther);
    this.updateForm.get('Siron').setValue(this.currPatient.Siron);
    this.updateForm.get('TIBC').setValue(this.currPatient.TIBC);
    this.updateForm.get('Sferitin').setValue(this.currPatient.Sferitin);
    this.updateForm.get('TSAT').setValue(this.currPatient.TSAT);
    this.updateForm.get('hormPTH').setValue(this.currPatient.hormPTH);
    this.updateForm.get('hormVITD').setValue(this.currPatient.hormVITD);
    this.updateForm.get('hormOther').setValue(this.currPatient.hormOther);
    this.updateForm.get('hbsAg').setValue(this.currPatient.hbsAg);
    this.updateForm.get('hcvAb').setValue(this.currPatient.hcvAb);
    this.updateForm.get('hcvPCR').setValue(this.currPatient.hcvPCR);
    this.updateForm.get('hivI_II').setValue(this.currPatient.hivI_II);
    this.updateForm.get('otherSer').setValue(this.currPatient.othrSer);
    this.updateForm.get('coagPT').setValue(this.currPatient.coagPT);
    this.updateForm.get('coagPPT').setValue(this.currPatient.coagPPT);
    this.updateForm.get('coagINR').setValue(this.currPatient.coagINR);
    this.updateForm.get('cMD1').setValue(this.currPatient.cMD1);
    this.updateForm.get('cMD2').setValue(this.currPatient.cMD2);
    this.updateForm.get('cMD3').setValue(this.currPatient.cMD3);
    this.updateForm.get('cMD4').setValue(this.currPatient.cMD4);
    this.updateForm.get('cMD5').setValue(this.currPatient.cMD5);
    this.updateForm.get('cMD6').setValue(this.currPatient.cMD6);
    this.updateForm.get('cMD7').setValue(this.currPatient.cMD7);
    this.updateForm.get('cMD8').setValue(this.currPatient.cMD8);
    this.updateForm.get('cMD9').setValue(this.currPatient.cMD9);
    this.updateForm.get('cMD10').setValue(this.currPatient.cMD10);
    this.updateForm.get('cMD11').setValue(this.currPatient.cMD11);
    this.updateForm.get('cMD12').setValue(this.currPatient.cMD12);
    this.updateForm.get('cMD13').setValue(this.currPatient.cMD13);
    this.updateForm.get('cMD14').setValue(this.currPatient.cMD14);
    this.updateForm.get('cMD15').setValue(this.currPatient.cMD15);
    this.updateForm.get('cMD16').setValue(this.currPatient.cMD16);
    this.updateForm.get('HepBV').setValue(this.currPatient.HepBV);
    this.updateForm.get('HepBVDate').setValue(this.currPatient.HepBVDate);
    this.updateForm.get('InfV').setValue(this.currPatient.InfV);
    this.updateForm.get('InfVDate').setValue(this.currPatient.InfVDate);
    this.updateForm.get('otherVAC').setValue(this.currPatient.otherVAC);
    this.updateForm.get('progNotes').setValue(this.currPatient.progNotes);
    this.updateForm.get('consNotes').setValue(this.currPatient.consNotes);
  }

  updateP()
  {
    this.pService.getPatientbynID(this.updateForm.controls.n_ID.value).subscribe((data: PatientObj) => {
      if(data && this.updateForm.controls.n_ID.value != this.currPatient.n_ID)
      {
        this._snackBar.open("Error: Medical record with matching National ID already exists","",{ duration: 4000, panelClass: ['red-snackbar']
      });
      }
      else
      {
        this.updatedP.fullName = this.updateForm.controls.fullName.value;
    this.updatedP.fullNameAr = this.updateForm.controls.fullNameAr.value;
    this.updatedP.Age = this.updateForm.controls.Age.value;
    this.updatedP.Height = this.updateForm.controls.Height.value;
    this.updatedP.bldGrp = this.updateForm.controls.bldGrp.value;
    this.updatedP.kAllergies = this.updateForm.controls.kAllergies.value;
    if (this.currUser.isAdmin) {
      if(this.updateForm.controls.Hospital.value) { this.updatedP.Hospital = this.updateForm.controls.Hospital.value; }
      else
      {
        this.updatedP.Hospital = "Ranya";
      }
    }
    else {
      this.updatedP.Hospital = this.currUser.Hospital;
    }
    this.updatedP.contactInfo = this.updateForm.controls.contactInfo.value;
    this.updatedP.Gender = this.updateForm.controls.Gender.value;
    this.updatedP.n_ID = this.updateForm.controls.n_ID.value;
    this.updatedP.Nationality = this.updateForm.controls.Nationality.value;
    this.updatedP.submittedBy = this.updateForm.controls.submittedBy.value;
    this.updatedP.dosDialysis = this.updateForm.controls.dosDialysis.value;
    this.updatedP.oKidneyDisease = this.updateForm.controls.oKidneyDisease.value;
    this.updatedP.otherKD = this.updateForm.controls.otherKD.value;
    this.updatedP.surgHist1 = this.updateForm.controls.surgHist2.value;
    this.updatedP.surgHist2 = this.updateForm.controls.surgHist2.value;
    this.updatedP.morbHype = this.cMorbHyp;
    this.updatedP.morbDM = this.cMorbDM;
    this.updatedP.morbEpi = this.cMorbE;
    if(this.SelectedCMorbOther)
    {
      this.updatedP.coMorbOther = this.updateForm.controls.coMorbidityOther.value;
    }

    this.updatedP.previousTr = this.updateForm.controls.previousTr.value;
    this.updatedP.prevTrGS = this.updateForm.controls.prevTrGS.value;
    this.updatedP.fitForTr = this.updateForm.controls.fitForTr.value;
    this.updatedP.fitForTrReason = this.updateForm.controls.fitForTrReason.value;
    this.updatedP.potentialRDonors = this.updateForm.controls.potentialRDonors.value;
    this.updatedP.currentAccess1 = this.updateForm.controls.currentAccess1.value;
    this.updatedP.currentAccess2 = this.updateForm.controls.currentAccess2.value;
    this.updatedP.currentAccess3 = this.updateForm.controls.currentAccess3.value;
    this.updatedP.dOfAccessCreation = this.updateForm.controls.dOfAccessCreation.value;
    this.updatedP.compInsuf = this.CompIns;
    this.updatedP.compInf = this.CompInf;
    this.updatedP.compAD = this.CompAD;
    this.updatedP.compDC = this.CompDC;
    if(this.SelectedDCOther)
    {
      this.updatedP.compOther = this.updateForm.controls.ComplicationOther.value;
    }
    this.updatedP.previousAccess1 = this.updateForm.controls.previousAccess1.value;
    this.updatedP.previousAccess2 = this.updateForm.controls.previousAccess2.value;
    this.updatedP.previousAccess3 = this.updateForm.controls.previousAccess3.value;
    this.updatedP.previousAccess4 = this.updateForm.controls.previousAccess4.value;
    this.updatedP.Frequency = this.updateForm.controls.Frequency.value;
    this.updatedP.Duration = this.updateForm.controls.Duration.value;
    this.updatedP.Dialyser = this.updateForm.controls.Dialyser.value;
    this.updatedP.antiCoagulation = this.updateForm.controls.antiCoag.value;
    this.updatedP.hInit = this.updateForm.controls.hInit.value;
    this.updatedP.hMaint = this.updateForm.controls.hMaint.value;
    this.updatedP.LMWHval = this.updateForm.controls.LMWHval.value;
    this.updatedP.antiCoReason = this.updateForm.controls.antiCoReason.value;
    this.updatedP.dryWt = this.updateForm.controls.dryWt.value;
    this.updatedP.avgWtGain = this.updateForm.controls.avgWtGain.value;
    this.updatedP.avgBP = this.updateForm.controls.avgBP.value;
    this.updatedP.avgPulse = this.updateForm.controls.avgPulse.value;
    this.updatedP.dialAdeq = this.updateForm.controls.dialAdeq.value;
    this.updatedP.dCompHead = this.DCHA;
    this.updatedP.dCompHOT = this.DCHypot;
    this.updatedP.dCompHG = this.DCHypog;
    this.updatedP.dCompHET = this.DCHyper;
    this.updatedP.dCompMC = this.DCMC;
    this.updatedP.dCompAC = this.DCAC;
    this.updatedP.dCompVom = this.DCV;
    this.updatedP.dCompSZ = this.DCSZ;
    this.updatedP.dCompHS = this.DCHS;
    this.updatedP.dCompIt = this.DCIH;
    if(this.SelectedCompOther)
    {
      this.updatedP.dCompOther = this.updateForm.controls.dCompOther.value;
    }
    this.updatedP.labDate = this.updateForm.controls.labDate.value;
    this.updatedP.cbcHB = this.updateForm.controls.cbcHB.value;
    this.updatedP.cbcWBC = this.updateForm.controls.cbcWBC.value;
    this.updatedP.cbcPlatelets = this.updateForm.controls.cbcPlatelets.value;
    this.updatedP.chemCre = this.updateForm.controls.chemCre.value;
    this.updatedP.chemUrea = this.updateForm.controls.chemUrea.value;
    this.updatedP.chemSod = this.updateForm.controls.chemSod.value;
    this.updatedP.chemPot = this.updateForm.controls.chemPot.value;
    this.updatedP.chemCal = this.updateForm.controls.chemCal.value;
    this.updatedP.chemPhos = this.updateForm.controls.chemPhos.value;
    this.updatedP.chemAST = this.updateForm.controls.chemAST.value;
    this.updatedP.chemALT = this.updateForm.controls.chemALT.value;
    this.updatedP.chemAlb = this.updateForm.controls.chemAlb.value;
    this.updatedP.chemMag = this.updateForm.controls.chemMag.value;
    this.updatedP.chemAlph = this.updateForm.controls.chemAlph.value;
    this.updatedP.chemOther = this.updateForm.controls.chemOther.value;
    this.updatedP.Siron = this.updateForm.controls.Siron.value;
    this.updatedP.TIBC = this.updateForm.controls.TIBC.value;
    this.updatedP.Sferitin = this.updateForm.controls.Sferitin.value;
    this.updatedP.TSAT = this.updateForm.controls.TSAT.value;
    this.updatedP.hormPTH = this.updateForm.controls.hormPTH.value;
    this.updatedP.hormVITD = this.updateForm.controls.hormVITD.value;
    this.updatedP.hormOther = this.updateForm.controls.hormOther.value;
    this.updatedP.hbsAg = this.updateForm.controls.hbsAg.value;
    this.updatedP.hcvAb = this.updateForm.controls.hcvAb.value;
    this.updatedP.hcvPCR = this.updateForm.controls.hcvPCR.value;
    this.updatedP.hivI_II = this.updateForm.controls.hivI_II.value;
    this.updatedP.othrSer = this.updateForm.controls.otherSer.value;
    this.updatedP.coagPT = this.updateForm.controls.coagPT.value;
    this.updatedP.coagPPT = this.updateForm.controls.coagPPT.value;
    this.updatedP.coagINR = this.updateForm.controls.coagINR.value;
    this.updatedP.cMD1 = this.updateForm.controls.cMD1.value;
    this.updatedP.cMD2 = this.updateForm.controls.cMD2.value;
    this.updatedP.cMD3 = this.updateForm.controls.cMD3.value;
    this.updatedP.cMD4 = this.updateForm.controls.cMD4.value;
    this.updatedP.cMD5 = this.updateForm.controls.cMD5.value;
    this.updatedP.cMD6 = this.updateForm.controls.cMD6.value;
    this.updatedP.cMD7 = this.updateForm.controls.cMD7.value;
    this.updatedP.cMD8 = this.updateForm.controls.cMD8.value;
    this.updatedP.cMD9 = this.updateForm.controls.cMD9.value;
    this.updatedP.cMD10 = this.updateForm.controls.cMD10.value;
    this.updatedP.cMD11 = this.updateForm.controls.cMD11.value;
    this.updatedP.cMD12 = this.updateForm.controls.cMD12.value;
    this.updatedP.cMD13 = this.updateForm.controls.cMD13.value;
    this.updatedP.cMD14 = this.updateForm.controls.cMD14.value;
    this.updatedP.cMD15 = this.updateForm.controls.cMD15.value;
    this.updatedP.cMD16 = this.updateForm.controls.cMD16.value;
    this.updatedP.HepBV = this.updateForm.controls.HepBV.value;
    this.updatedP.HepBVDate = this.updateForm.controls.HepBVDate.value;
    this.updatedP.InfV = this.updateForm.controls.InfV.value;
    this.updatedP.InfVDate = this.updateForm.controls.InfVDate.value;
    this.updatedP.otherVAC = this.updateForm.controls.otherVAC.value;
    this.updatedP.progNotes = this.updateForm.controls.progNotes.value;
    this.updatedP.consNotes = this.updateForm.controls.consNotes.value;
    this._snackBar.open("Medical record updated successfully","",{ duration: 4000, panelClass: ['green-snackbar']
    });
    this.pService.updatePatient(this.id, this.updatedP).subscribe(res => console.log(res));
    this.router.navigate(['/list']);

      }
    });

  }

}
