import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsRoutingModule, DynamicFormComponent],
})
export class FormsModule {}
