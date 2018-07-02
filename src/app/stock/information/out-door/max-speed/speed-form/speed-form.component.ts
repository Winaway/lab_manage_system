import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StockService, Vehicle} from "../../../../stock.service";

@Component({
  selector: 'app-speed-form',
  templateUrl: './speed-form.component.html',
  styleUrls: ['./speed-form.component.css']
})
export class SpeedFormComponent implements OnInit {
  formModel1: FormGroup;
  formModel2: FormGroup;
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

  }
  save1(){
  }
  save2(){
  }
}
