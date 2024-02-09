import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/base/service.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AlertService } from 'src/app/base/alert.service';
import { NavController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { ApiService } from 'src/app/base/api.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('form') form !: NgForm;

  submissionType : 'login' | 'join' = 'login';

  credentials = [];

  constructor(
    private router: Router,
    private apiService: ServiceService,
    private api : ApiService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navCtrl : NavController) { }

  ngOnInit() {
  }

  onSubmit(){
    const { email, password } = this.form.value;
    if( !email || !password) return;

    if( this.submissionType === 'login'){
      //this.SignIn(email,password);
      this.navCtrl.navigateForward("/mini-annonce");

    }else if( this.submissionType === 'join'){
      const { name, lastName, email, date_naissance , password,confirmedPassword    } = this.form.value;
      if( !name || !lastName || !date_naissance || !password || !confirmedPassword) return;
      //this.signUp(name, lastName, email, date_naissance , password);
      this.navCtrl.navigateForward("/mini-annonce");
    }
  }

  toggleText(){
    if(this.submissionType === 'login'){
      this.submissionType = 'join';
    } else if (this.submissionType === 'join'){
      this.submissionType = 'login';
    }

  }

  async SignIn(email : any,password : any){
    const loading = await this.loadingController.create();
    await loading.present();

    await this.apiService.SingIn(email,password)
      .subscribe( res => {
        console.log(res);
        const data = res.json();
        Storage['remove']({key : 'token'});
        Storage['set']({key: 'token', value: data.token});
        this.navCtrl.navigateForward("/mini-annonce");
      }, 
      async (err) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Erreur sur l\'email ou le mot de passe',
          buttons: ['OK'],
        });
        alert.present();
    });
  }

  async signUp( name : any, lastName : any, email : any, date_naissance : any , password : any) {
    const loading = await this.loadingController.create();
    await loading.present();

    this.api.signUp(name, lastName, email, date_naissance , password).subscribe(
      async (res) => {
        console.log(res)
        await loading.dismiss();
        this.SignIn(email, password);
      },
      async (err) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Signup failed',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }

  
  /*async login(email : any, password : any) {
    const loading = await this.loadingController.create();
    await loading.present();

    this.api.login(email, password).subscribe(
      async _ => {
        await loading.dismiss();
        this.router.navigateByUrl('/mini-annonce', { replaceUrl: true });
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Erreur sur l\'email ou le mot de passe',
          message: res.error.msg,
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }*/

  /*async signUp( name : any, lastName : any, email : any, date_naissance : any , password : any,confirmedPassword : any ) {
    const loading = await this.loadingController.create();
    await loading.present();

    this.api.signUp(name, lastName, email, date_naissance , password).subscribe(
      async _ => {
        await loading.dismiss();
        this.login(email, password);
      },
      async (res) => {
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Signup failed',
          message: res.error.msg,
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }*/

}
