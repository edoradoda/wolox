import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandComponent } from './pages/land/land.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './pages/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [LandComponent, RegisterComponent, ListComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutocompleteLibModule
  ]
})
export class LandingModule { }
