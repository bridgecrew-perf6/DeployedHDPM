import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HosplistService {


addHosp(hospitalName : String)
{
  return this.http.post(`/hospitals/add`,{hospitalName: hospitalName});
}
removeHosp(hospitalName: String)
{
  return this.http.post(`/hospitals/delete`,{hospitalName: hospitalName});
}
getHospitals()
{
  return this.http.get(`/hospitals/`);
}
  constructor(private http: HttpClient) {
    
   }
}
