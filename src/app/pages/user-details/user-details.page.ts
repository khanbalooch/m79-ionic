import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {

  user: IUser;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = this.router.getCurrentNavigation().extras.state as IUser;
  }

}
