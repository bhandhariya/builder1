import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';
import * as $ from "jquery";
@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  public test:Object={
    toolbarInline: true,
    charCounterCount: false,
    toolbarVisibleWithoutSelection: true

  }  
  constructor() { }

  ngOnInit(): void {
    FroalaEditor('div#froala-editor', {
      toolbarSticky: false
    })
  }

}
