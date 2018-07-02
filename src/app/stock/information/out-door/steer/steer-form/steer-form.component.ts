import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StockService, Vehicle} from "../../../../stock.service";

@Component({
  selector: 'app-steer-form',
  templateUrl: './steer-form.component.html',
  styleUrls: ['./steer-form.component.css']
})
export class SteerFormComponent implements OnInit {

  formModel1: FormGroup;
  formModel2: FormGroup;
  formModel3: FormGroup;
  formModel4: FormGroup;
  @Input()
  vehicle: Vehicle;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    const fb = new FormBuilder();
    this.formModel1 = fb.group({
      vDisplay1: [''],
      vTrue1: ['']
    });
    this.formModel2 = fb.group({
      vDisplay2: [''],
      vTrue2: ['']
    });
    this.formModel3 = fb.group({
      vDisplay3: [''],
      vTrue3: ['']
    });
    this.formModel4 = fb.group({
      vDisplay3: [''],
      vTrue3: ['']
    });
  }
  save1(){

  }
  save2(){

  }
  save3(){

  }
  save4(){

  }
}
