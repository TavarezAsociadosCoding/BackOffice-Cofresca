import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registerForm: FormGroup;

  busy = false;
  username = '';
  password = '';
  loginError = false;
  private subscription: Subscription | null = null;



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
) {
  }

  owlcarousel = [
    {
      title: "Cofresca Admin"    }
  ]
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true
  };



  login() {
    if (!this.username || !this.password) {
      return;
    }
    this.busy = true;
    const returnUrl = this.route.snapshot.queryParams['dashboard/default'] || 'dashboard/default';
    this.authService.login(this.username, this.password)
      .pipe(finalize(() => (this.busy = false)))
      .subscribe(
        () => {
          this.router.navigate([returnUrl]);
        },
        () => {
          this.loginError = true;
        }
      );
  }


  register() {
    if (!this.username || !this.password) {
      return;
    }
    this.busy = true;
    const returnUrl = this.route.snapshot.queryParams['dashboard/default'] || 'dashboard/default';
    //TODO:DEBER DE EVALUAR LOS EMPLEADOS ETC Y EL STATUS DESACTIVADO ISACTIVATE
    // this.authService.register(this.username, this.password)
    //   .pipe(finalize(() => (this.busy = false)))
    //   .subscribe(
    //     () => {
    //       this.router.navigate([returnUrl]);
    //     },
    //     () => {
    //       this.loginError = true;
    //     }
    //   );
  }
  ngOnInit() {

  }

  onSubmit() {

  }

}
