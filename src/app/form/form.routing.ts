import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { FirstformComponent } from './firstform/firstform.component';


const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'f1', component: FirstformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
