import { Component, OnInit } from '@angular/core';
import FroalaEditor from 'froala-editor';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
r
  constructor() { }

  ngOnInit() {
   
  } 
  public test:Object={
    toolbarInline: true,
    charCounterCount: false,
    toolbarVisibleWithoutSelection: true

  }  
}
