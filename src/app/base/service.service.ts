import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, throwError, Observable, tap , map , of } from 'rxjs'
import { User } from '../interfaces/user'
import { Annonce } from '../interfaces/annonce'
import { Vehicule } from '../interfaces/vehicule'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private readonly apiUrl = 'http://carshopbackend-production-477a.up.railway.app/carshop/'
  constructor(private http: HttpClient) {} 

  requestOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ',
      'Content-Type': 'application/json'
    })
  };
  
  SingIn( email : any , password : any): Observable<any> {
    
    return this.http
    .post<any>(`http://carshopbackend-production-477a.up.railway.app/aut/login`, { email , password } , this.requestOptions)
    .pipe(tap(console.log), catchError(this.handleError))
  }

  SingUp( user : any  ): Observable<any> {
    return this.http
    .get<any>(`${this.apiUrl}UtilisateurControlleur/saveUtilisateur`, user)
    .pipe((map(response => response)),catchError((error: any) => of(error))
    );
  }

  getUser(user: any): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}users/get`, user)
      .pipe(tap(console.log), catchError(this.handleError))
  }

  getUserstate(user : User) {
    return (user != null) ? true : false;
  }

  getAnnonceById(idAnnonce : any) : Observable<any>{
    return this.http
      .get<any>(`${this.apiUrl}Detail_annonces/${idAnnonce}`)
      .pipe(tap(console.log), catchError(this.handleError))
  }
  getAllAnnonce() : Observable<any>{
    return this.http
      .get<any>(`${this.apiUrl}Detail_annonces`)
      .pipe((map(response => response)),catchError((error: any) => of(error))
      );
  }

  getVehicule_photoById(idVehicule : any) : Observable<any>{
    return this.http
      .get<any>(`${this.apiUrl}Vehicule_photoController/getVehicule_photoById/${idVehicule}`)
      .pipe(tap(console.log), catchError(this.handleError))
  }

  getVehiculeById(idVehicule : any) : Observable<Vehicule>{
    return this.http
      .get<Vehicule>(`${this.apiUrl}VehiculeController/getVehiculeById/${idVehicule}`)
      .pipe(tap(console.log), catchError(this.handleError))
  }

  getType_carburants() : Observable<any>{
    return this.http
      .get<any>(`${this.apiUrl}Type_carburants/voir`)
      .pipe(tap(console.log), catchError(this.handleError))
  }

  getMarques() : Observable<any>{
    return this.http
      .get<any>(`${this.apiUrl}Marques`)
      .pipe(tap(console.log), catchError(this.handleError))
  }

  getModeles() : Observable<any>{
    return this.http
      .get<any>(`${this.apiUrl}Modeles`)
      .pipe(tap(console.log), catchError(this.handleError))
  }

  getCategories() : Observable<any>{
    return this.http
      .get<any>(`${this.apiUrl}Categories`)
      .pipe(tap(console.log), catchError(this.handleError))
  }


  addVehicule(tableau : any) : Observable<any>{
    return this.http
    .post<any>(`${this.apiUrl}VehiculeController/save/`, tableau , this.requestOptions)
    .pipe(tap(console.log), catchError(this.handleError))
  }

  addAnnonce(tableau : any) : Observable<any>{
    return this.http
    .post<any>(`${this.apiUrl}AnnonceController/save/`, tableau , this.requestOptions)
    .pipe(tap(console.log), catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`An error occured - Error code : ${error.status}`)
  }

}
