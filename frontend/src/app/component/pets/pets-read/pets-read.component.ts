import { Dono } from './../../donos/donos-model';
import { PetsService } from './../pets.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from './../pets-model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pets-read',
  templateUrl: './pets-read.component.html',
  styleUrls: ['./pets-read.component.css']
})

export class PetsReadComponent implements OnInit {
  pets: Pet[];
  dono: Dono;
  displayedColumns=['id','Nome','Apelido','Raca','Especie','action'];
  constructor(private PetsService: PetsService) { }

  ngOnInit(): void {
    
    this.PetsService.read().subscribe(pets=>{
      this.pets = pets
      })   
    }
    
}
