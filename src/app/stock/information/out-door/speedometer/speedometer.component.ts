import { Component, OnInit } from '@angular/core';
import {Speedometer, StockService} from "../../../stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.css']
})
export class SpeedometerComponent implements OnInit {

  speedometer = new Speedometer(0, 0, 0, 0, 0, 0, 0, 0);
  vehicle_id: number;
  constructor(private routeInfo: ActivatedRoute, public router: Router, private stockService: StockService) { }

  ngOnInit() {
    this.vehicle_id = this.routeInfo.snapshot.params['id'];
    this.stockService.getSpeedometer(this.vehicle_id).subscribe(
      data => {
        //const code = data.code;
        //console.log(code);
        if (!data[0] || data.code === 1) {
          this.stockService.addSpeedometer({vehicle_id: this.vehicle_id}).subscribe( data1 => console.log('addSpeedometer:' + JSON.stringify(data1)));
        } else {
          this.speedometer = data[0];
          console.log(this.speedometer);
        }}
    );
  }
  checkSpeedometer() {
    this.stockService.getSpeedometer(this.vehicle_id).subscribe(
      data => {
        this.speedometer = data[0];
        console.log(this.speedometer);
      }
    );
  }

}
