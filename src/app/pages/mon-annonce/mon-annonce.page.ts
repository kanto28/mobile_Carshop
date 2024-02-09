import { Component, ElementRef,OnInit ,ViewChild} from '@angular/core';
import Swiper from 'swiper';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/base/service.service';
import { Annonce } from 'src/app/interfaces/annonce';
import { Vehicule } from 'src/app/interfaces/vehicule';

@Component({
  selector: 'app-mon-annonce',
  templateUrl: './mon-annonce.page.html',
  styleUrls: ['./mon-annonce.page.scss'],
})
export class MonAnnoncePage implements OnInit {

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    './assets/andrana.jpg',
    './assets/andrana1.jpeg',
    './assets/andrana2.jpg',
  ];

  //images = [];

  //annonce: any = null;

  annonce: Annonce = { 
    id_annonce: 0,
    id_vehicule: 0,
    prix: 23500000,
    descriptions: 'Tsara be io tomobil io fa aza gaga nareo anh',
    date_annonce: new Date(),
    validations: 0,
    etat: 0
  };

  vehicule = { 
    modele: '',
    marque : '',
    categorie: '',
    types: '',
    matriculation: '',
    couleur: '',
    annee: 1900,
    consommation: 0,
    capacite_reservoir: 12,
    nombre_place: 5,
    transmission: 1,
    kilometrage: 0
  };


  constructor(
    public api: ServiceService,
    public route: ActivatedRoute,
    public router: Router) {

    }


  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  ngOnInit() {
    this.getAnnonce();
  }

  swiperSlideChanged(e: any) {
    console.log('changed:',e);
  }

  async getAnnonce() {
      await this.api.getAnnonceById(this.route.snapshot.paramMap.get('idAnnonce'))
        .subscribe(res => {
          // console.log(res);
          const jsonData = res;
          this.annonce.id_annonce = jsonData.data.id_annonce;
          this.annonce.id_vehicule = jsonData.data.id_vehicule;
          this.annonce.prix = jsonData.data.prix;
          this.annonce.descriptions = jsonData.data.descriptions;
          this.annonce.date_annonce = new Date(jsonData.data.date_annonce);
          this.annonce.validations = jsonData.data.validations;
          this.annonce.etat = jsonData.data.etat;

          this.vehicule.modele = jsonData.data.modele;
          this.vehicule.marque = jsonData.data.marque;
          this.vehicule.categorie = jsonData.data.categorie;
          this.vehicule.types = jsonData.data.types;
          this.vehicule.matriculation = jsonData.data.matriculation;
          this.vehicule.couleur = jsonData.data.couleur;
          this.vehicule.annee = jsonData.data.annee;
          this.vehicule.consommation = jsonData.data.consommation;
          this.vehicule.capacite_reservoir = jsonData.data.capacite_reservoir;
          this.vehicule.nombre_place = jsonData.data.nombre_place;
          this.vehicule.transmission = jsonData.data.transmission;
          this.vehicule.kilometrage = jsonData.data.kilometrage;
        }, err => {
          console.log(err);
      });
  }
  async getVehicule_photoById() {
    await this.api.getVehicule_photoById(this.annonce.id_vehicule)
      .subscribe(res => {
        console.log(res);
        this.images = res;
      }, err => {
        console.log(err);
    });
  }
  async getVehiculeById() {
    await this.api.getVehicule_photoById(this.annonce.id_vehicule)
      .subscribe(res => {
        console.log(res);
        this.vehicule = res;
      }, err => {
        console.log(err);
    });
  }

  transmission(id : string){
    if(id == '1'){

    }
  }
}


