import { PetsService } from './../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pet } from './../pets-model';

@Component({
  selector: 'app-pets-delete',
  templateUrl: './pets-delete.component.html',
  styleUrls: ['./pets-delete.component.css']
})
export class PetsDeleteComponent implements OnInit {

  pet:Pet

  constructor(private router:Router,private petsService:PetsService,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petsService.readById(id).subscribe(pet => {
      this.pet = pet;
    })
  }

  deletePets():void{
    this.petsService.delete(this.pet.id).subscribe(()=>{
      this.petsService.showMessage("Pet removido com sucesso!")
      this.router.navigate(['/pets']);
    })
  }

  cancel(): void {
    this.router.navigate(['/pets']);
  }
}
