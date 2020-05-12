import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public headingtitleOptions: Object = {
    placeholderText: 'what is your heading',
    charCounterCount: false,
    toolbarInline: true,
    events: {
      "initialized": () => {
        console.log(this.myTitle);
      },
      "contentChanged": () => {
        console.log(this.myTitle);
      }
    }
  }
  public subheadingtitleOptions: Object = {
    placeholderText: 'what is your SUb heading',
    charCounterCount: false,
    toolbarInline: true,
    events: {
      "initialized": () => {
        console.log(this.myTitle);
      },
      "contentChanged": () => {
        console.log(this.myTitle);
      }
    }
    
  }


  public test:Object={
    
    toolbarInline: true,
    charCounterCount: false,
    toolbarVisibleWithoutSelection: true
  }
  public myTitle: string;

}
