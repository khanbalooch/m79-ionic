import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FilterPipe } from 'src/app/shared-components/pipes/filter.pipe';
import { IUser } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  randomUsers: IUser[];
  filteredUsers: IUser[];

  constructor(private user: UserService, private router: Router, private filter: FilterPipe) {}

  ngOnInit(): void {
    this.loadRandomUserData();
  }

  loadRandomUserData(){
    // this.randomUsers =
    this.user.getList().subscribe(
      data => {
        this.randomUsers = data;
        this.filteredUsers = data;
      },
      error => console.log(error)
    );
  }

  openDetails(user: IUser){
    this.router.navigateByUrl('/userdetails', {state: user});
  }

  onSearch(searchTerm){
    this.filteredUsers = this.filter.transform(this.randomUsers, searchTerm, 'name');
  }
}
