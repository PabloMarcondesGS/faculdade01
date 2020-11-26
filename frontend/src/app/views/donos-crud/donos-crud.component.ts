import { HeaderService } from './../../component/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donos-crud',
  templateUrl: './donos-crud.component.html',
  styleUrls: ['./donos-crud.component.css']
})
export class DonosCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Gerenciar Donos',
      icon: 'person_outline',
      routeUrl: '/donos'
    }
  }

  ngOnInit(): void {
  }

  navigateToDonoCreate(): void {
    this.router.navigate(['donos/create'])
  }
}
