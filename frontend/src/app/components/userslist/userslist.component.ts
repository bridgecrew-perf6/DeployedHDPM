import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hospitalObj } from 'src/app/hospitalClass';
import { HosplistService } from 'src/app/services/hosplist.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { userObj } from 'src/app/userClass';
import { userInt } from '../../user.model';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  currUser: userObj;
  hospList: hospitalObj[];
  preUsers: userInt[];
  users: userInt[];
  singleUser: userInt;
  selectedHosp: String;
  p = 1;
  constructor(public nav: NavbarService, private authService: UserService, private router: Router, private hospListService: HosplistService) {
    this.currUser = this.authService.getLoggedUser();
    this.selectedHosp = this.currUser.Hospital;
  }

  ngOnInit(): void {
    if (!this.currUser.isAdmin) {
      this.router.navigate(['/**']);
    }
    else {
      this.nav.show();
      this.fetchUsers();
      this.getAllHospitals();
    }
  }
  getAllHospitals() {
    this.hospListService.getHospitals().subscribe((data: hospitalObj[]) => {
      this.hospList = data

    });
  }
  fetchUsers() {
    if (this.selectedHosp != "All") {
      this.authService.getRegUsersByHosp(this.selectedHosp).subscribe((data: any) => {
        this.preUsers = data;
        console.log(this.preUsers);
        if (this.preUsers && this.preUsers.length > 1) {
          this.singleUser = null;
          this.users = this.preUsers;
        }
        else {
          this.users = null;
          this.singleUser = data[0];
        }
      });
    }
    else {
      this.authService.getAllUsers().subscribe((data: any) => {
        this.preUsers = data;
        if (this.preUsers && this.preUsers.length > 1) {
          this.singleUser = null;
          this.users = this.preUsers;
        }
        else {
          this.users = null;
          this.singleUser = data[0];
        }
      });
    }
  }
  onHospChange(_$event: any) {
    this.fetchUsers();
  }
  deleteUser(id: any) {
    if (confirm("Are you sure you want to remove this user?")) {
      this.authService.deleteUser(id).subscribe(res => console.log(""));
      this.fetchUsers();
    }

  }
  changeUserRole(user: userInt) {
    if (confirm("Are you sure you want to change this user's role?")) {
      const c_Id = new String(user._id);
      const cUser = new userObj();
      cUser.firstName = user.firstName;
      cUser.lastName = user.lastName;
      cUser.email = user.email;
      cUser.contactInfo = user.contactInfo;
      cUser.isAdmin = !user.isAdmin;
      this.authService.updateUserbyId(c_Id, cUser).subscribe(_res => console.log());
      window.location.reload();
    }
  }

}
