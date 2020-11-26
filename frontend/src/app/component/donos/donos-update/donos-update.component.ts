import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dono } from './../donos-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DonosService } from '../donos.service';

@Component({
  selector: 'app-donos-update',
  templateUrl: './donos-update.component.html',
  styleUrls: ['./donos-update.component.css']
})
export class DonosUpdateComponent implements OnInit {

  formDono: FormGroup;
  dono: Dono;

  constructor(private donosService: DonosService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.donosService.readById(id).subscribe(dono => {
      this.dono = dono;
    })
    this.configForm();
  }

  configForm() {
    this.formDono = this.formBuilder.group({
      Nome: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Telefone: [null, Validators.required]
    })
  }

  updateDono(): void {
    this.donosService.update(this.dono).subscribe(() => {
      this.donosService.showMessage("Dono atualizado com sucesso!")
      this.router.navigate(['/donos'])
    })
  };

  cancel(): void {
    this.router.navigate(['/donos']);
  }

}
