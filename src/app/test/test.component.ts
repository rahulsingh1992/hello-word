import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>
  helllo  {{nameee | uppercase}}

  <button (click)="fireEvent()">Send Event</button>
  <h2>hello {{massage | titlecase}}</h2>
  <h2>hello {{pipename | slice:3:6}}</h2>
  <h2>hello {{person | json}}</h2>

  <h2>hello {{5.678 |number:'1.2-3'}}</h2>
  <h2>hello {{5.678 |number:'3.4-5'}}</h2>
  <h2>hello {{0.25 | percent}}</h2>
  <h2>hello {{0.25 | currency}}</h2>
  <h2>hello {{0.25 | currency:'Eur':'code'}}</h2>
  <h2>hello {{date}}</h2>
  <h2>hello {{date | date:'short'}}</h2>
  <h2>hello {{date | date:'shortDate'}}</h2>
  <h2>hello {{date | date:'shortTime'}}</h2>
  </div>`,
  styles: []
})
export class TestComponent implements OnInit {
  
  public name = "code evalution";
  public siteUrl = window.location.href ;
  public myId = "textId";
  public isDisable = true;
  public succesClass = "text-succes";
  public greeting = "";
  public massage  ="hello rahul how are you" ; 
  public pipename ="rahulop";
  public person = {
    'fnake':'rahul',
    'lname':'singh'
  }
  public date = new Date();
   @Input(`parentData`) public nameee ; 
   @Output() public childEvent = new EventEmitter();
  


  greetUser(){
    return "hello"+ this.name ;
  }
  constructor() { }
  logMassage(value){
    console.log(value);
    //return this.greeting="hello beta how are you";
  }
  ngOnInit() {
  }
  fireEvent(){
    alert();
    this.childEvent.emit('pass data to childe to parend component using eevmt emitter');

  }

 

}
