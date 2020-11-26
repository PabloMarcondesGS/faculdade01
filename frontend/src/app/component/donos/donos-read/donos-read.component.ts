import { DonosService } from './../donos.service';
import { Dono } from './../donos-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donos-read',
  templateUrl: './donos-read.component.html',
  styleUrls: ['./donos-read.component.css']
})
export class DonosReadComponent implements OnInit {
  donos: Dono[];
  displayedColumns = ['id', 'Nome', 'Email', 'Telefone','action']
  constructor(private donosService: DonosService) { }

  ngOnInit(): void {
    this.donosService.read().subscribe(donos => {
      this.donos = donos;
    })
  }

}
