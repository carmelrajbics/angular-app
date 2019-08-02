import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '../userdata.myservice';
import { Department } from '../app.department';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {

  myFav=true;
  userData;
  dept;
  totalLike=200;
shoppingCart=[];

  companyName="Eurofins";
  profilePic="https://cdnmedia.eurofins.com/corporate-eurofins/media/1004/logo.png";

  constructor() {}

  ngOnInit() {
    
    
  }

  callme()
  {
    console.log('Called!!!');
  }
  
}
