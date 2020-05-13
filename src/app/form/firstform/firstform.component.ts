import { Component, OnInit, ViewChild } from '@angular/core';
import { NameComponent } from '../name/name.component';
import { EmailComponent } from '../email/email.component';


interface Field {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-firstform',
  templateUrl: './firstform.component.html',
  styleUrls: ['./firstform.component.css']
})
export class FirstformComponent implements OnInit {

  fields: Field[] = [
    {value: '1', viewValue: 'First Name'},
    // {value: '2', viewValue: 'Last Name'},
    {value: '3', viewValue: 'Email'},
    // {value: '4', viewValue: 'Phone Nummber'},
    // {value: '5', viewValue: 'Age'},
    // {value: '6', viewValue: 'Email'}
  ];


  public Headingoptins: Object = {
    placeholderText: 'what is your heading',
    toolbarInline: true,
    charCounterCount: true,
    toolbarVisibleWithoutSelection: true
  }
  public subheadingOptions: Object = {
    placeholderText: 'what is your heading',
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
  public Buttonoptins: Object = {
   
    toolbarInline: true,
    charCounterCount: true,
    toolbarVisibleWithoutSelection: true
  }
  namePara;emailPara;
  openn(a){
    console.log(a)
    if(a.value=="1"){
      this.namePara="name"
    }
    if(a.value=="3"){
      this.emailPara="email"
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  selected = 'option2';
h1;h2;
@ViewChild(NameComponent) name;
@ViewChild(EmailComponent) email;

sub(){
  console.log(this.h1,this.h2,this.name.name,this.email.email);
  
}
}
