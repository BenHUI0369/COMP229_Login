import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './auth-service.service';
import { Router } from '@angular/router';
import { NavbarService } from './shared/navbar.service';
import { BusinessContactComponent } from './business-contact/business-contact.component';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { CoreService } from './core/core.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/*
export class AppComponent {
  isLoggedIn!: boolean;
  title = 'crudApp';
  ngOnInit(){
    let user = localStorage.getItem("user");
    if (user !== null && user !== undefined) {
      this.isLoggedIn = true;
    }
  }
  logout() {
    localStorage.clear();
  }
}
*/

export class AppComponent implements OnInit {
  isLoggedIn!: boolean;
  title = 'crudApp';
  constructor(
    private cdr: ChangeDetectorRef, 
    private authService: AuthService, 
    private router: Router, 
    public navbarService: NavbarService,
    private _coreService: CoreService
    ) { }
  ngOnInit(){
    this.navbarService.hide();
    let jwt = localStorage.getItem("jwt");
    if (jwt !== null && jwt !== undefined) {
      this.isLoggedIn = true;
      this.cdr.detectChanges();
    }
  }
  logout() {
    let jwt = localStorage.getItem('jwt');
    this.authService.logout({
      refreshToken: jwt
    }).subscribe(() => {
      localStorage.clear();
      this.router.navigate(['/']);
      //alert("Logout successfully");
      this._coreService.openSnackBar("Logout successfully");
    },
    (error) => {
      console.log(error);
    });
  }
}


