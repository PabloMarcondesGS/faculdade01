import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './views/home/home.component';
import { PetsCrudComponent } from './views/pets-crud/pets-crud.component';
import { AppRoutingModule } from './app-routing.module';
import { PetsCreateComponent } from './component/pets/pets-create/pets-create.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PetsReadComponent } from './component/pets/pets-read/pets-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PetsUpdateComponent } from './component/pets/pets-update/pets-update.component';
import { PetsDeleteComponent } from './component/pets/pets-delete/pets-delete.component';
import { DonosCrudComponent } from './views/donos-crud/donos-crud.component';
import { DonosCreateComponent } from './component/donos/donos-create/donos-create.component';
import { DonosReadComponent } from './component/donos/donos-read/donos-read.component';
import { DonosUpdateComponent } from './component/donos/donos-update/donos-update.component';
import { DonosDeleteComponent } from './component/donos/donos-delete/donos-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { PetsDetailsComponent } from './component/pets/pets-details/pets-details.component';
import { DonosDetailsComponent } from './component/donos/donos-details/donos-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PetsCrudComponent,
    PetsCreateComponent,
    PetsReadComponent,
    PetsUpdateComponent,
    PetsDeleteComponent,
    DonosCrudComponent,
    DonosCreateComponent,
    DonosReadComponent,
    DonosUpdateComponent,
    DonosDeleteComponent,
    PetsDetailsComponent,
    DonosDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
