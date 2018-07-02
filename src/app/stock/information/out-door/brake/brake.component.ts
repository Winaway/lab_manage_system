import { Component, OnInit } from '@angular/core';
import {Brake, StockService} from "../../../stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-brake',
  templateUrl: './brake.component.html',
  styleUrls: ['./brake.component.css']
})
export class BrakeComponent implements OnInit {
  brake = new Brake(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
  vehicle_id: number;
  constructor(private routeInfo: ActivatedRoute, public router: Router, private stockService: StockService) { }

  ngOnInit() {
    this.vehicle_id = this.routeInfo.snapshot.params['id'];
    this.stockService.getBrake(this.vehicle_id).subscribe(
      data => {
        //const code = data.code;
        //console.log(code);
        if (!data[0] || data.code === 1) {
          this.stockService.addBrake({vehicle_id: this.vehicle_id}).subscribe( data1 => console.log('addBrake' + data1));
          } else {
          this.brake = data[0];
          console.log(this.brake);
        }}
    );
  }
}
