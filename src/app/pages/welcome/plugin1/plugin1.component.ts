import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';
import "../../../../../node_modules/froala-editor/css/plugins/colors.min.css";
import "../../../../../node_modules/froala-editor/js/plugins/colors.min.js";
@Component({
  selector: 'app-plugin1',
  templateUrl: './plugin1.component.html',
  styleUrls: ['./plugin1.component.css']
})
export class Plugin1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
     FroalaEditor('div#froala-editor', {
      toolbarButtons: ['bold', 'italic', 'textColor', 'backgroundColor'],
      // Colors list.
      colorsBackground: [
        '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
        '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
      ],
      colorsStep: 6,
      colorsText: [
        '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
        '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
      ]
    })
  }

}
