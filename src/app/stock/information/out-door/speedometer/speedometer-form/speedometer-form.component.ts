import {Component, Input, OnInit} from '@angular/core';
import {Speedometer, StockService, Vehicle} from "../../../../stock.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-speedometer-form',
  templateUrl: './speedometer-form.component.html',
  styleUrls: ['./speedometer-form.component.css']
})
export class SpeedometerFormComponent implements OnInit {
  formModel1: FormGroup;
  formModel2: FormGroup;
  formModel3: FormGroup;
  @Input()
  vehicle: Vehicle;
  speedometer: Speedometer;
  vehicle_id: number;
  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, public router: Router) {
    const fb = new FormBuilder();
    this.formModel1 = fb.group({
      vDisplay1: [''],
      vTrue1: ['']
    }, {validator: this.speedometerValidator});
    this.formModel2 = fb.group({
      vDisplay2: [''],
      vTrue2: ['']
    },{validator: this.speedometerValidator2});
    this.formModel3 = fb.group({
      vDisplay3: [''],
      vTrue3: ['']
    });
  }

  ngOnInit() {
    this.vehicle_id = this.routeInfo.snapshot.params['id'];
    if (this.vehicle_id > 0) {
      console.log(1);
      // this.isUpdate = true;
      this.checkSpeedoForm();
    }
  }
  save1() {
    const value = this.formModel1.value;
    this.stockService.updateSpeedometer1(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save2() {
    const value = this.formModel2.value;
    this.stockService.updateSpeedometer2(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save3() {
    const value = this.formModel3.value;
    this.stockService.updateSpeedometer3(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  checkSpeedoForm() {
    this.stockService.getSpeedometer(this.vehicle_id).subscribe(
      data => {
        this.speedometer = data[0];
        this.formModel1.reset({
          vDisplay1: data[0].v_display_1,
          vTrue1: data[0].v_true_1
        });
        this.formModel2.reset({
          vDisplay2: data[0].v_display_2,
          vTrue2: data[0].v_true_2
        });
        this.formModel3.reset({
          vDisplay3: data[0].v_display_3,
          vTrue3: data[0].v_true_3
        });
      }
    );
  }

  speedometerValidator(control: FormGroup) {
    let vDisplay: FormControl = control.get('vDisplay1') as FormControl;
    let vTrue: FormControl = control.get('vTrue1') as FormControl;
    if (vDisplay != null && vTrue != null) {
      let temp1: number = vDisplay.value - vTrue.value;
      let temp2: number = 0. * vTrue.value + 4;
      let valid: boolean = temp1 > 0 && temp1 < temp2;
      console.log('password是否校验通过:' + valid);
      return valid ? null : {speedometervalid: true};
    }
    return null;
  }

  speedometerValidator2(control: FormGroup) {
    let vDisplay: FormControl = control.get('vDisplay2') as FormControl;
    let vTrue: FormControl = control.get('vTrue2') as FormControl;
    if (vDisplay != null && vTrue != null) {
      let temp1: number = vDisplay.value - vTrue.value;
      let temp2: number = 0. * vTrue.value + 4;
      let valid: boolean = temp1 > 0 && temp1 < temp2;
      console.log('password是否校验通过:' + valid);
      return valid ? null : {speedometervalid: true};
    }
    return null;
  }
}
