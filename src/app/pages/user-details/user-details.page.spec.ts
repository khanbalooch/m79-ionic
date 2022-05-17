import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/app/models/User';

import { UserDetailsPage } from './user-details.page';

describe('UserDetailsPage', () => {
  let component: UserDetailsPage;
  let fixture: ComponentFixture<UserDetailsPage>;

  // beforeEach(waitForAsync(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ UserDetailsPage ],
  //     imports: [IonicModule.forRoot(), RouterTestingModule],
  //     providers: [ { provide: Router, useClass: RouterStub } ]
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(UserDetailsPage);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});


class RouterStub{
  getCurrentNavigation(){
    return {
       extras: {
          state: new User('Muhammad', 'Ibrahim', 'Test@gmail.com', '03417889364', 'Male','Null')
        }
      }
    }
 }