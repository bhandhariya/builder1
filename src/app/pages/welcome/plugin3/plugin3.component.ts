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
    new FroalaEditor('div#froala-editor', {
      // Set custom buttons.
      toolbarButtons: [['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'], ['fontFamily', 'fontSize', 'textColor', 'backgroundColor'], ['inlineClass', 'inlineStyle', 'clearFormatting']]
    })
  }

}
