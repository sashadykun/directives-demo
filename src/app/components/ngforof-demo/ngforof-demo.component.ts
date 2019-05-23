import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngforof-demo',
  templateUrl: './ngforof-demo.component.html',
  styleUrls: ['./ngforof-demo.component.css']
})
export class NgforofDemoComponent implements OnInit {

  imgStyles = {
    'height.px': 100,
    'borderRadius.px': 5,
    'margin.px': 5
  }

  people: Array<any>


  constructor() { }

  ngOnInit() {
    this.people = [
      {name: 'Sasha', age: 35, city: 'Lake Forest', picture: '/assets/images/sasha.jpg' },
      {name: 'Nata', age: 35, city: 'Lake Forest', picture: '/assets/images/nata.jpg' },
      {name: 'Alisa', age: 1, city: 'Lake Forest', picture: '/assets/images/alisa.jpg' },
      {name: 'Ira', age: 35, city: 'Lake Forest', picture: '/assets/images/ira.jpg' }
    ]
  }

  getCssClass(age){
    if(age<18){
      return 'text-danger';
    }
    else {
      return 'text-success';
    }
  }

  deletePerson(index){
    this.people.splice(index, 1);
  }

}
