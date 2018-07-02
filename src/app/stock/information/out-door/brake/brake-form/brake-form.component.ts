import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StockService, Vehicle} from "../../../../stock.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-brake-form',
  templateUrl: './brake-form.component.html',
  styleUrls: ['./brake-form.component.css']
})
export class BrakeFormComponent implements OnInit {
  formModel1: FormGroup;
  formModel2: FormGroup;
  formModel3: FormGroup;
  formModel4: FormGroup;
  formModel5: FormGroup;
  @Input()
  vehicle: Vehicle;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    const fb = new FormBuilder();
    this.formModel1 = fb.group({
      vDryFront: [''],
      sDryFront: [''],
      mfddDryFront: [''],
      fDryFront: [''],
      vDryRear: [''],
      sDryRear: [''],
      mfddDryRear: [''],
      fDryRear: ['']
    });
    this.formModel2 = fb.group({
      vDryCbsUnload: [''],
      sDryCbsUnload: [''],
      mfddDryCbsUnload: [''],
      fDryCbsUnload: [''],
      vDryCbsLoad: [''],
      sDryCbsLoad: [''],
      mfddDryCbsLoad: [''],
      fDryCbsLoad: [''],
      vDryEmergUnload: [''],
      sDryEmergUnload: [''],
      mfddDryEmergUnload: [''],
      fDryEmergUnload: [''],
      vDryEmergLoad: [''],
      sDryEmergLoad: [''],
      mfddDryEmergLoad: [''],
      fDryEmergLoad: ['']
    });
    this.formModel3 = fb.group({
      fDryAllFront: [''],
      fDryAllRear: [''],
      vDryAll: [''],
      sDryAll: ['']
    });
    this.formModel4 = fb.group({
      vDryHighSpeed: [''],
      sDryHighSpeed: [''],
      mfddDryHighSpeed: [''],
      fDryHighSpeedFront: [''],
      fDryHighSpeedRear: ['']
    });
    this.formModel5 = fb.group({
      vCbsFailureFront: [''],
      sCbsFailureFront: [''],
      mfddCbsFailureFront: [''],
      fCbsFailureFront: [''],
      vCbsFailureRear: [''],
      sCbsFailureRear: [''],
      mfddCbsFailureRear: [''],
      fCbsFailureRear: ['']
    });
  }

  save1() {
    const value = this.formModel1.value;
    this.stockService.updateBrake1(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save2() {
    const value = this.formModel2.value;
    this.stockService.updateBrake2(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save3() {
    const value = this.formModel3.value;
    this.stockService.updateBrake3(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save4() {
    const value = this.formModel4.value;
    this.stockService.updateBrake4(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save5() {
    const value = this.formModel5.value;
    this.stockService.updateBrake5(value, this.vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
  }

}
