import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {letProto} from "rxjs/operator/let";
import {Observable} from "rxjs/Observable";
import {User, UserService} from "../../user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  formModel: FormGroup;

  user: User = new User(0, '', 1, '', '');
  isUpdate = false;
  userId: number;
  constructor(private routeInfo: ActivatedRoute, private userService: UserService, public router: Router) {
  }

  ngOnInit() {
    this.userId = this.routeInfo.snapshot.params['id'];
    console.log(this.userId);
    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      limits: ['', Validators.required],
      department: ['']
    })
    if (this.userId > 0) {
      console.log(1);
      this.isUpdate = true;
      this.userService.getUser(this.userId).subscribe(
        data => {
          this.user = data[0];
          this.formModel.reset({
            name: data[0].name,
            limits: data[0].limits,
            department: data[0].department
          });
        }
      );
    }
  }

  cancel() {
    this.router.navigateByUrl('/user');
  }

  save() {
    this.formModel.value.limits = this.user.limits;
    const value = this.formModel.value;
    if (this.isUpdate) {
      this.userService.updateUser(value, this.userId).subscribe(data => console.log(data));
    }else {
      this.userService.addUser(value).subscribe(data => console.log(data));
    }
    this.router.navigateByUrl('/user');
  }

}
