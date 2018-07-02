import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StockService, Vehicle, VehicleParam} from "../../stock.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-para-form',
  templateUrl: './para-form.component.html',
  styleUrls: ['./para-form.component.css']
})
export class ParaFormComponent implements OnInit {
  formModel1: FormGroup;
  formModel2: FormGroup;
  formModel3: FormGroup;
  vehicleParam: VehicleParam;
  vehicle_id: number;
  @Input()
  vehicle: Vehicle;
  constructor(private routeInfo: ActivatedRoute, private stockService: StockService) {
    const fb = new FormBuilder();
    this.formModel1 = fb.group({
      maxSpeed: [''],
      massInRunningOrder: [''],
      maxMass: [''],
      brakeTypeFront: [''],
      brakeTypeRear: [''],
      tirePressureFront: [''],
      tirePressureRear: ['']
    });
    this.formModel2 = fb.group({
      p30mins: [''],
      rotateSpeed30mins: [''],
      Tmax: [''],
      rotateSpeedTmax: [''],
      voltage: [''],
      battaryMass: [''],
      battaryNum: [''],
      battaryStorage: ['']
    });
    this.formModel3 = fb.group({
      vDisplay3: [''],
      vTrue3: ['']
    });
  }

  ngOnInit() {
    this.vehicle_id = this.routeInfo.snapshot.params['id'];
    if (this.vehicle_id > 0) {
      console.log(this.vehicle_id);
      this.checkParamForm();
    }
  }

  save1() {
    const value = this.formModel1.value;
    this.stockService.updateVehicleParam1(value, this.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save2() {
    const value = this.formModel2.value;
    this.stockService.updateVehicleParam2(value, this.vehicle_id).subscribe(
      data => console.log(data)
    );
  }
  save3() {

  }
  checkParamForm() {
    this.stockService.getVehicleParam(this.vehicle_id).subscribe(
      data => {
        this.vehicleParam = data[0];
        console.log(this.vehicleParam)
        this.formModel1.reset({
          maxSpeed: this.vehicleParam.max_speed,
          massInRunningOrder: this.vehicleParam.mass_in_running_order,
          maxMass: this.vehicleParam.max_mass,
          brakeTypeFront: this.vehicleParam.brake_type_front,
          brakeTypeRear: this.vehicleParam.brake_type_rear,
          tirePressureFront: this.vehicleParam.tire_pressure_front,
          tirePressureRear: this.vehicleParam.tire_pressure_rear
        });
        this.formModel2.reset({
          p30mins: this.vehicleParam.p_30mins,
          rotateSpeed30mins: this.vehicleParam.rotate_speed_30mins,
          Tmax: this.vehicleParam.Tmax,
          rotateSpeedTmax: this.vehicleParam.rotate_speed_tmax,
          voltage: this.vehicleParam.voltage,
          battaryMass: this.vehicleParam.battary_mass,
          battaryNum: this.vehicleParam.battary_num,
          battaryStorage: this.vehicleParam.battary_storage
        });
        // this.formModel3.reset({
        //   vDisplay3: data[0].v_display_3,
        //   vTrue3: data[0].v_true_3
        // });
      }
    );
  }
}
