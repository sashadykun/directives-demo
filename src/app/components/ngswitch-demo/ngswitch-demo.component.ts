import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch-demo',
  templateUrl: './ngswitch-demo.component.html',
  styleUrls: ['./ngswitch-demo.component.css']
})
export class NgswitchDemoComponent implements OnInit {
  //declare variable
  choice = 1;
  constructor() { }

  ngOnInit() {
    if(sessionStorage['userChoice']) {
      this.choice = sessionStorage['userChoice'];
    }
  }

  setChoice(choice){
    this.choice=choice;
    sessionStorage['userChoice'] = choice;
  }
  // ngOnInit() {
  //   if(localStorage['userChoice']) {
  //     this.choice = localStorage['userChoice'];
  //   }
  // }

  // setChoice(choice){
  //   this.choice=choice;
  //   localStorage['userChoice'] = choice;
  // }
}
