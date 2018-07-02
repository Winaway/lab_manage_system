import { Component, OnInit } from '@angular/core';
import {UserService} from "../stock/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      username: [''],
      password: ['']
    });
  }

  login() {
    const value = this.formModel.value;
    this.userService.login(value).subscribe(
      data => console.log(data)
    );
  }


}
