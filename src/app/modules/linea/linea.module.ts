import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LineaRoutingModule } from './linea-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AppModule } from 'src/app/app.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    LoginComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    LineaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class LineaModule { }
