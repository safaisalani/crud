import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { CountryService } from '../country.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './info.component';



@NgModule({
  declarations: [
    DetailsComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[CountryService]
})
export class InfoModule { }
