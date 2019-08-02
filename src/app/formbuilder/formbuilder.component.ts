import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../app.usersdata.service';
import { Observable } from 'rxjs/Observable';
import { UserData } from '../userdata.myservice';
import { UserModel } from '../app.usermodel';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  userForm: FormGroup;
  allUsers: Observable<UserData[]>;
  users = new Array<UserModel>();

  constructor(private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      income: ['', Validators.required],
      address: ['', Validators.required]
    });
  }
  onFormSubmit() {
    console.log('Data Driven form submitted!!!');
    let user = this.userForm.value;

    this.createUser(user);
    this.loadUserDataFromDB();
  }

  loadUserDataFromDB() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response.map(item => {
        return new UserModel(item.name, item.email, item.income, item.address)
      })
    })
  }

  createUser(userData: UserModel) {
    this.userService.createUser(userData).subscribe(response => {
      console.log(response);
    });
  }

  get name() {
    return this.userForm.get("name");
  }
  get email() {
    return this.userForm.get("email");
  }
  get income() {
    return this.userForm.get("income");
  }
  get address() {
    return this.userForm.get("address");
  }
}
