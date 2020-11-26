import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from './../pets.service';
import { Pet, Raca, Especie } from './../pets-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dono } from '../../donos/donos-model';

@Component({
  selector: 'app-pets-update',
  templateUrl: './pets-update.component.html',
  styleUrls: ['./pets-update.component.css']
})
export class PetsUpdateComponent implements OnInit {

  pet: Pet;
  formPet:FormGroup
  racas: Observable <Raca[]>;
  especies:Observable<Especie[]>;
  donos:Observable<Dono[]>;
  constructor(private petService: PetsService, private router: Router, private route: ActivatedRoute,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.readById(id).subscribe(pet => {
      this.pet = pet;
    })
    this.racas = this.petService.readRacas();
    this.especies = this.petService.readEspecies();
    this.donos = this.petService.readDonoList();
    this.configForm();
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

  updatePets(): void {
    this.petService.update(this.pet).subscribe(() => {
      this.petService.showMessage("Pet atualizado com sucesso!")
      this.router.navigate(['/pets'])
    })
  };

  cancel(): void {
    this.router.navigate(['/pets']);
  }
}
