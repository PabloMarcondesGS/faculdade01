import { Router } from '@angular/router';
import { DonosService } from './../donos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-donos-create',
  templateUrl: './donos-create.component.html',
  styleUrls: ['./donos-create.component.css']
})
export class DonosCreateComponent implements OnInit {

  formDono: FormGroup;

  constructor(private donosService:DonosService, private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.configForm();
  }

  configForm(){
    this.formDono =  this.formBuilder.group({
      Nome:[null,Validators.required],
      Email:[null,[Validators.required, Validators.email]],
      Telefone:[null,Validators.required]
    })
  }

  createDono():void{
    this.donosService.create(this.formDono.value).subscribe(()=>{
      this.donosService.showMessage("Dono cadastrado!")
      this.router.navigate(['donos']);
    })
  }
  
  cancel():void{
    this.router.navigate(['donos'])
  }
}
