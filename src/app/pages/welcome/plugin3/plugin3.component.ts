import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';
@Component({
  selector: 'app-plugin3',
  templateUrl: './plugin3.component.html',
  styleUrls: ['./plugin3.component.css']
})
export class Plugin3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new FroalaEditor('button#edit', {
      events: {
        contentChanged: function () {
          console.log ('content changed');
        }
      }
    })  }

}
