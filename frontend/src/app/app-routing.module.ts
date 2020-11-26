import { PetsDetailsComponent } from './component/pets/pets-details/pets-details.component';
import { DonosDeleteComponent } from './component/donos/donos-delete/donos-delete.component';
import { DonosUpdateComponent } from './component/donos/donos-update/donos-update.component';
import { PetsCreateComponent } from './component/pets/pets-create/pets-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from "./views/home/home.component";
import { PetsCrudComponent } from "./views/pets-crud/pets-crud.component";
import { PetsUpdateComponent } from "./component/pets/pets-update/pets-update.component";
import { PetsDeleteComponent } from "./component/pets/pets-delete/pets-delete.component";
import { DonosCrudComponent } from './views/donos-crud/donos-crud.component';
import { DonosCreateComponent } from './component/donos/donos-create/donos-create.component';
import { DonosDetailsComponent } from './component/donos/donos-details/donos-details.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "pets",
    component: PetsCrudComponent
  },
  {
    path: "pets/create",
    component: PetsCreateComponent
  },
  {
    path: "pets/update/:id",
    component: PetsUpdateComponent
  }
  ,
  {
    path: "pets/delete/:id",
    component: PetsDeleteComponent
  },
  {
    path:"pets/details/:id",
    component:PetsDetailsComponent
  },
  {
    path: "donos",
    component: DonosCrudComponent
  },
  {
    path: "donos/create",
    component: DonosCreateComponent
  },
  {
    path:"donos/update/:id",
    component: DonosUpdateComponent
  },
  {
    path:'donos/delete/:id',
    component:DonosDeleteComponent
  },
  {
    path:'donos/details/:id',
    component:DonosDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
