import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  // @Output() childMessage = new EventEmitter<string>();
  name;

  constructor() { }

  ngOnInit(): void {
  }
  public nameOptions: Object = {
    placeholderText: 'what is your Name',
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
