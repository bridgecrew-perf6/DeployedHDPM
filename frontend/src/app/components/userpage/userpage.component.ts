import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { UserService } from 'src/app/services/user.service';
import { userInt } from 'src/app/user.model';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  currUser: userInt;

  constructor(public nav: NavbarService, private userService: UserService, private router: Router) {
    this.currUser = userService.getLoggedUser();

   }

  ngOnInit(): void {
    this.nav.show();

  }

}
