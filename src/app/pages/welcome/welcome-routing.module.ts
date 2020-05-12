import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { SurveyComponent } from './survey/survey.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Plugin1Component } from './plugin1/plugin1.component';
import { Plugin2Component } from './plugin2/plugin2.component';
import { Plugin3Component } from './plugin3/plugin3.component';
import { Plugin4Component } from './plugin4/plugin4.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {path:'survey',component:SurveyComponent},
  {path:'s1',component:Sample1Component},
  {path:'s2',component:Sample2Component},
  {path:'s3',component:Sample3Component},
  {path:'p1',component:Plugin1Component},
  {path:'p2',component:Plugin2Component},
  {path:'p3',component:Plugin3Component},
  {path:'p4',component:Plugin4Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
