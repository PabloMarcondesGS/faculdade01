import { Observable } from 'rxjs';
import { DonosService } from './../donos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dono } from '../donos-model';
import { Pet } from '../../pets/pets-model';

@Component({
  selector: 'app-donos-details',
  templateUrl: './donos-details.component.html',
  styleUrls: ['./donos-details.component.css']
})
export class DonosDetailsComponent implements OnInit {
  dono:Dono;
  pets:Observable<Pet[]>;
  displayedColumns=['id','Nome','Apelido','Raca','Especie','action'];
  constructor(private router:Router, private donosService:DonosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    const id = +this.route.snapshot.paramMap.get('id');
    this.pets = this.donosService.readPeatsById(id);
    this.donosService.readById(id).subscribe(dono => {
      this.dono = dono
    })

  }

  backList(): void {
    this.router.navigate(['/donos']);
  }
}
