import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientObj } from '../patientClass';

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(private http: HttpClient) { }


  getPatientsbyHosp(Hospital: String) {
    return this.http.post(`/patients/Hospital`,{Hospital: Hospital});
  }
  getPatientById(id: any) {

    return this.http.get(`/patients/${id}`);

  }
  getPatientbyfullNameAr(fullNameAr: any)
  {
    return this.http.post('/patients/fullNameAr/', {fullNameAr: fullNameAr});

  }

  getPatientbynID(n_ID: any) {
    return this.http.post('/patients/n_ID/',{n_ID: n_ID});
  }

  getPatientbyContact(contactInfo: any)
  {
    return this.http.get(`/patients/${contactInfo}`);
  }

  addPatient(pCurrent= new PatientObj()) {
    return this.http.post(`/patients/add`,pCurrent);
  }
  updatePatient(id:any, pCurrent = new PatientObj()) {
    return this.http.post(`$/patients/update/${id}`,pCurrent);
  }
  deletePatient(id: any) {
    return this.http.get(`/patients/delete/${id}`);
  }

}
