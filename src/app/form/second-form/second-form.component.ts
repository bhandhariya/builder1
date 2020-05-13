import { Component, OnInit } from '@angular/core';
import FroalaEditor from "froala-editor";
interface Field {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {

  fields: Field[] = [
    {value: '1', viewValue: 'Single Select'},
    {value: '2', viewValue: 'Multi Select'},
    {value: '3', viewValue: 'Email'},
    // {value: '4', viewValue: 'Phone Nummber'},
    // {value: '5', viewValue: 'Age'},
    // {value: '6', viewValue: 'Email'}
  ];
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit(): void {
     FroalaEditor.DefineIcon('insertHTML', { NAME: 'plus', SVG_KEY: 'add' });
    FroalaEditor.RegisterCommand('insertHTML', {
      title: 'Insert HTML',
      focus: true,
      undo: true,
      refreshAfterCallback: true,
      callback: function () {
        this.html.insert('Some Custom HTML.');
        this.undo.saveStep();
      }
    });

  }

  public option: Object = {
    // placeholderText: 'what is your heading',
    charCounterCount: false,
    toolbarInline: true,
    events: {
      "initialized": () => {
        // console.log(this.myTitle);
      },
      "contentChanged": () => {
        // console.log(this.myTitle);
      }
    }
  }

}
