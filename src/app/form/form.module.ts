import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormRoutingModule } from "./form.routing";
import { FirstformComponent } from './firstform/firstform.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {MatSelectModule} from '@angular/material/select';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { HttpClientModule } from '@angular/common/http';
import { SecondFormComponent } from './second-form/second-form.component';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [FormComponent, FirstformComponent, NameComponent, EmailComponent, SecondFormComponent],
  imports: [
    CommonModule, HttpClientModule ,FormRoutingModule,FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    MatSelectModule,MatRadioModule
  ]
})
export class FormModule { }
