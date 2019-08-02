import { Component, OnInit } from '@angular/core';
import { Department } from '../app.department';
import { NgForm } from '@angular/forms'

import { Observable } from 'rxjs/Observable';
import { UsersService } from '../app.usersdata.service';
import { UserModel } from '../app.usermodel';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dept;
  users = new Array<UserModel>();

  userData = {
    name: 'Suresh',
    email: 'abc@gmail.com',
    income: 2321,
    address: 'Dubai, Dubai Kurukku santhu...'
  };

  constructor(private department: Department, private userService: UsersService) { }

  ngOnInit() {
    this.dept = this.department.loadDepartment();
    this.loadUserDataFromDB();
  }

  formSubmit(nf: NgForm) {
    console.log('Form submitted!!!');
    this.userService.createUser(nf.value).subscribe(user => {
      console.log(user);
    });
    this.loadUserDataFromDB();
  }

  loadUserDataFromDB() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response.map(item => {
        return new UserModel(item.name, item.email, item.income, item.address)
      })
    })
  }

  // createUser(nf) {

  //   this.userService.createUser(nf.value).subscribe(user => {
  //     console.log(user);
  //   });
  //   this.loadUserDataFromDB();
  // }

}
