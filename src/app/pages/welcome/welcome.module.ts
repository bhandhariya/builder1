import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SurveyComponent } from './survey/survey.component';
import { Sample1Component } from './sample1/sample1.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { Plugin1Component } from './plugin1/plugin1.component';
import { Plugin2Component } from './plugin2/plugin2.component';
import { Plugin3Component } from './plugin3/plugin3.component';
import { Plugin4Component } from './plugin4/plugin4.component';

@NgModule({
  imports: [WelcomeRoutingModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [WelcomeComponent, SurveyComponent, Sample1Component, Sample2Component, Sample3Component, Plugin1Component, Plugin2Component, Plugin3Component, Plugin4Component],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
