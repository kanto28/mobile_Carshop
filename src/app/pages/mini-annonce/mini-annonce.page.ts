import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/base/service.service';
import { Annonce } from 'src/app/interfaces/annonce';
import { NavController } from '@ionic/angular';
import { Vehicule } from 'src/app/interfaces/vehicule';

@Component({
  selector: 'app-mini-annonce',
  templateUrl: './mini-annonce.page.html',
  styleUrls: ['./mini-annonce.page.scss'],
})
export class MiniAnnoncePage implements OnInit {

  donnees: any[] = [];
  
  annonces = {
    id_annonce: 0,
    id_vehicule: 0,
    prix: 0,
    descriptions: '',
    date_annonce: new Date(),
    validations: 0,
    etat: 0
  };

  constructor(
    public api: ServiceService,
    public route: ActivatedRoute,
    public router: Router,
    private navCtrl : NavController) {}

  ngOnInit() {
    this.getAllAnnonce();
    
    
  }

  direction(idAnnonce : string){
    this.navCtrl.navigateForward("/mon-annonce/"+idAnnonce);
  }


  async getAllAnnonce() {
    await this.api.getAllAnnonce()
      .subscribe(res => {
        this.donnees = res.data;
        console.log(this.donnees);
      }, err => {
        console.log(err);
    });
  }
}
