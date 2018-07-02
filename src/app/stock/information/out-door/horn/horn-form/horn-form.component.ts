import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StockService, Vehicle} from "../../../../stock.service";

@Component({
  selector: 'app-horn-form',
  templateUrl: './horn-form.component.html',
  styleUrls: ['./horn-form.component.css']
})
export class HornFormComponent implements OnInit {

  formModel1: FormGroup;
  formModel2: FormGroup;
  formModel3: FormGroup;
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
  }
  save1(){

  }
  save2(){

  }
  save3(){

  }

}
