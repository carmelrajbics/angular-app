import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userData={
    name:'Carmel Raj Melkior',
    income:4523,
    rating:4.34343,
    joiningDate:new Date('11/11/2018'),
    description:'Sample Descriptions Sample Descriptions Sample Descriptions Sample' 
  };
}
