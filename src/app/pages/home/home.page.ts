import { AfterContentChecked, ChangeDetectorRef, Component, ViewChild, ViewChildren } from '@angular/core';
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
export class HomePage implements AfterContentChecked {

  randomUsers: Observable<IUser[]>;
  searchTerm: string = '';
  @ViewChildren('someVar') filteredItems;

  constructor(private user: UserService, private router: Router, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadRandomUserData();
  }

  loadRandomUserData(){
    this.randomUsers = this.user.getList();
  }

  openDetails(user: IUser){
    this.router.navigateByUrl('/userdetails', {state: user});
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}
