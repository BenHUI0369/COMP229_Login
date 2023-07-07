import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';
import { NavbarService } from '../shared/navbar.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private navbarService: NavbarService,
    private _coreService: CoreService
    ){}
  ngOnInit() {  
    this.initForm();
    this.navbarService.hide();
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result.error) {
          this._coreService.openSnackBar(result.error);
          //alert(result.error);
        }
        if(result.accessToken){
          //alert("Login successfully");
          this._coreService.openSnackBar("Login successfully");
          localStorage.setItem("jwt",result.refreshToken);
          this.router.navigate(['/home']);
        }else {
          alert("Other error happen!");
        }
      });
    };
  }


}
