import { Pet } from './../pets-model';
import { PetsService } from './../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dono } from '../../donos/donos-model';

@Component({
  selector: 'app-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.css']
})
export class PetsDetailsComponent implements OnInit {
  pet:Pet
  dono:Dono
  constructor(private router:Router,private petsService:PetsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petsService.readById(id).subscribe(pet => {
      this.pet = pet;
      this.petsService.readDonoId(pet.Dono).subscribe(dono =>{
        this.dono=dono 
      })
    })
  }
  
  backList(): void {
    this.router.navigate(['/pets']);
  }
}
