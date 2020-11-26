import { Especie, Pet, Raca } from './pets-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Dono } from '../donos/donos-model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  baseUrlPets = "https://5fb1a48b87ed490016ea8046.mockapi.io/api/v1/pets";
  baseUrlDonos = "https://5fb1a48b87ed490016ea8046.mockapi.io/api/v1/donos";
  baseUrlRacas = "https://5fb1a48b87ed490016ea8046.mockapi.io/api/v1/racas";
  baseUrlEspecies = "https://5fb1a48b87ed490016ea8046.mockapi.io/api/v1/especies";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: Boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"]
    });
  }

  //PETS CORE
  create(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseUrlPets, pet).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.baseUrlPets).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Pet> {
    const url = `${this.baseUrlPets}/${id}`;
    return this.http.get<Pet>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(pet: Pet): Observable<Pet> {
    const url = `${this.baseUrlPets}/${pet.id}`;
    return this.http.put<Pet>(url, pet).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Pet> {
    const url = `${this.baseUrlPets}/${id}`
    return this.http.delete<Pet>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  //RACAS
  readRacas(): Observable<Raca[]> {
    return this.http.get<Raca[]>(this.baseUrlRacas).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //ESPECIES
  readEspecies(): Observable<Especie[]>{
    return this.http.get<Especie[]>(this.baseUrlEspecies).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //DONOS
  readDonoList():Observable<Dono[]>{
    return this.http.get<Dono[]>(this.baseUrlDonos).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readDonoId(id):Observable<Dono>{
    const url = `${this.baseUrlDonos}/${id}`;
    return this.http.get<Dono>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!,true");
    return EMPTY;
  }

}
