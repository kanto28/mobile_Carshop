import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/base/service.service';

@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.page.html',
  styleUrls: ['./ajouter-voiture.page.scss'],
})
export class AjouterVoiturePage implements OnInit {

  public info : any = {}


  constructor(
    private apiService: ServiceService
  ) { }

  categories = [
    {
      nom_categorie : 'Course'
    },
    {
      nom_categorie : 'Familial'
    },
    {
      nom_categorie : 'sport'
    }

  ];

  marques = [
    {
      nom_marque : 'Volkswagen'
    },
    {
      nom_marque : 'Mercedes'
    },
    {
      nom_marque : 'Audi'
    }

  ];

  models = [
    {
      nom_model : 'berlines'
    },
    {
      nom_model : 'hayons'
    },
    {
      nom_model : 'limousines'
    }
  ];

  carburants = [
    {
      nom_carburant : 'Diesel'
    },
    {
      nom_carburant : 'Essence'
    },
    {
      nom_carburant : 'Gasoil'
    },

  ];
  
  options = [
    { label: 'climatiseur', checked: false },
    { label: 'chaise_bebe', checked: false },
    { label: 'gps', checked: false },
    { label: 'confre', checked: false },
    { label: 'musique', checked: false },
    { label: 'ceinture_securite', checked: false },
    { label: 'bleutooth', checked: false },
    { label: 'tableau_bord', checked: false },
    { label: 'verouillage_centralise', checked: false },
    { label: 'verouillage_distance', checked: false },
    { label: 'kit_vehicule', checked: false }
    // Ajoutez autant d'options que nécessaire
  ];
  selectedOptions = [];

  requestBody = [{
    nom_voiture : this.info.nom_voiture,
    nombre_place : this.info.nombre_place,
    marque : this.info.marque,
    carburant : this.info.carburant,
    model : this.info.model,
    annee : this.info.annee,
    kilometrage : this.info.kilometrage,
    transmission : this.info.transmission,
    vitesse : this.info.vitesse,
    nom_categorie : this.info.nom_categorie
  }];

  vehicule =  JSON.stringify(this.info);
  
  anneeActuelle = new Date().getFullYear();
  annees = Array.from({length: this.anneeActuelle - 1949}, (_, i) => 1950 + i);


  onClick(){
    // this.ajouterVehicule(JSON.stringify(this.info));
  }

  ngOnInit() {
    // this.getType_carburants();
  }

  async ajouterVehicule(request : any) {
    await this.apiService.addVehicule(request)
      .subscribe(res => {
        console.log("ajouter avec succès : ",res);
      }, err => {
        console.log(err);
    });
  }

  async getType_carburants() {
    await this.apiService.getType_carburants()
      .subscribe(res => {
        console.log(res);
        this.carburants = res.data;
      }, err => {
        console.log(err);
    });
  }
  async getMarques() {
    await this.apiService.getMarques()
      .subscribe(res => {
        console.log(res);
        this.marques = res.json();
      }, err => {
        console.log(err);
    });
  }
  async getModeles() {
    await this.apiService.getModeles()
      .subscribe(res => {
        console.log(res);
        this.models = res.json();
      }, err => {
        console.log(err);
    });
  }
  async getCategories() {
    await this.apiService.getCategories()
      .subscribe(res => {
        console.log(res);
        this.categories = res.json();
      }, err => {
        console.log(err);
    });
  }
}
