import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/core/services/account/account.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  busy = false;
  userid;

  public data: any;

  constructor(
    public fb: FormBuilder,
    public profileService: ProfileService,
    private authService: AuthService
  ) {
    this.userid = this.authService.getUserIdStorage();
    this.LoadData(this.userid);
    this.editForm = this.InitializeForm();
  }

  ngOnInit() {}
  LoadData(userid: string) {
    this.profileService.GetProfile(userid).then((data) => {
      this.data = data;
      this.editForm.setValue({
        companyName: data.companyName,
        phoneGerente: data.phoneGerente,
        userName: data.userName,
        email: data.email,
        phone: data.phone,
        rnc: data.rnc,
        address: data.address,
      });
    });
  }

  InitializeForm() {
    return this.fb.group({
      companyName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      phone: ['', [Validators.required]],
      rnc: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phoneGerente: ['', [Validators.required]],
    });
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  EditForm() {
    this.busy = true;

    this.authService.editProfile(this.userid, this.editForm.value).subscribe(
      () => {
        window.location.reload();
        // this.router.navigate([returnUrl]);
      },
      (ex) => {
        // this.loginError = true;
        console.log(' Exception' + ex);
      }
    );
  }
}
