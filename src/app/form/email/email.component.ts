import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
email;
  constructor() { }

  ngOnInit(): void {
  }
  public nameOptions: Object = {
    placeholderText: 'what is your Email',
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
