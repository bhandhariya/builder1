import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';
// import "../../../../../node_modules/froala-editor/css/plugins/colors.min.css";
// import "../../../../../node_modules/froala-editor/js/plugins/colors.min.js";
@Component({
  selector: 'app-plugin2',
  templateUrl: './plugin2.component.html',
  styleUrls: ['./plugin2.component.css']
})
export class Plugin2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new FroalaEditor('div#froala-editor', {
    toolbarButtons: ['fontFamily', '|', 'fontSize', '|', 'paragraphFormat', '|', 'bold', 'italic', 'underline', 'undo', 'redo', 'codeView'],
    fontFamilySelection: true,
    fontSizeSelection: true,
    paragraphFormatSelection: true
  })
  }

}
