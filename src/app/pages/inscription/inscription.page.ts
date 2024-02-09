import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base/service.service';
import { AlertService } from 'src/app/base/alert.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ServiceService,
    private alertService : AlertService
    ) {
    this.signUpForm = this.formBuilder.group({
      user: this.formBuilder.group({
        name: ['', Validators.compose([Validators.required])],
        last_name: ['', Validators.compose([Validators.required])],
        date_naissance : ['',Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required])],
        password_confirmation: ['', Validators.compose([Validators.required])]
      }),
    });
  }

  ngOnInit() {
  }

  submitSignupForm() {
    console.log(this.signUpForm.value);
  }

  /*submitSignupForm() {
    this.apiService.SingUp(this.signUpForm.value).subscribe(response => {
      console.log('response is: ', response);
      if (response.status === 200) {
        //this.authenticationService.login(response.rows);
        this.apiService.SingIn(response.rows);
      } else {
        this.alertService.alert('Warning', response.message);
      }
    }, (error) => {
        this.signUpForm.controls['password'].reset();
      console.log(error);
    });
  }*/


}
