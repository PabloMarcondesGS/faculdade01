import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetsService } from './../pets.service';
import { Pet, Raca, Especie } from './../pets-model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dono } from '../../donos/donos-model';

@Component({
  selector: 'app-pets-create',
  templateUrl: './pets-create.component.html',
  styleUrls: ['./pets-create.component.css']
})
export class PetsCreateComponent implements OnInit {

  formPet:FormGroup;
  racas: Observable <Raca[]>;
  especies:Observable<Especie[]>;
  donos:Observable<Dono[]>;

  constructor(private PetsService: PetsService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.configForm();
    this.racas = this.PetsService.readRacas();
    this.especies = this.PetsService.readEspecies();
    this.donos = this.PetsService.readDonoList();
  }

  configForm(){
    this.formPet =  this.formBuilder.group({
      Nome:[null,Validators.required],
      Apelido:[null,Validators.required],
      Raca:[null,Validators.required],
      Especie:[null,Validators.required],
      Dono:[null,Validators.required]
    })
  }

  createPet():void{
    this.PetsService.create(this.formPet.value).subscribe(( )=>{
    this.PetsService.showMessage("Pet cadastrado!")
    this.router.navigate(['pets'])});
  }

  cancel():void{
    this.router.navigate(['pets'])
  }
}
