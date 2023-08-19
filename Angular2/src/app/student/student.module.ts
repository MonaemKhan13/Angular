import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DataComponent } from './data/data.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonaemComponent } from './monaem/monaem.component';
import { FormsComponent } from './forms/forms.component';


@NgModule({
  declarations: [
    DataComponent,
    MonaemComponent,
    FormsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
