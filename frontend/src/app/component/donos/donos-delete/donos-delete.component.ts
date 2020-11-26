import { ActivatedRoute, Router } from '@angular/router';
import { Dono } from './../donos-model';
import { Component, OnInit } from '@angular/core';
import { DonosService } from '../donos.service';

@Component({
  selector: 'app-donos-delete',
  templateUrl: './donos-delete.component.html',
  styleUrls: ['./donos-delete.component.css']
})
export class DonosDeleteComponent implements OnInit {
  dono:Dono
  constructor(private router:Router, private donosService:DonosService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.donosService.readById(id).subscribe(dono => {
      this.dono = dono;
    })
  }
  
  deleteDono():void{
    this.donosService.delete(this.dono.id).subscribe(()=>{
      this.donosService.showMessage("Dono removido com sucesso!")
      this.router.navigate(['/donos']);
    })
  }

  cancel(): void {
    this.router.navigate(['/donos']);
  }
}
