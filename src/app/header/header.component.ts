import { Component, OnInit } from '@angular/core';
import { UserData } from '../userdata.myservice';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData;
  
  constructor(private ud:UserData) {}

  ngOnInit() {
    this.userData=this.ud.loadUser();
  }

}
