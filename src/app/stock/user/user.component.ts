import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {Observable} from "rxjs";
import {User, UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  Users: Observable<User[]>;

  nameFilter: FormControl = new FormControl();

  keyword: string;

  constructor(public router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.Users = this.userService.getUsers();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }

  create() {
    this.router.navigateByUrl('/user/0');
  }

  update(user: User) {
    this.router.navigateByUrl('user/' + user.user_id);
  }
}
