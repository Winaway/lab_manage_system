import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService, Vehicle} from '../stock.service';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  Vehicles: Observable<Vehicle[]>;

  nameFilter: FormControl = new FormControl();

  keyword: string;

  constructor(public router: Router, private stockService: StockService) {
  }

  ngOnInit() {
    this.Vehicles = this.stockService.getVehicles();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keyword = value);
  }
  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock: Stock) {
    this.router.navigateByUrl('stock/' + stock.id);
  }

  check(vehicle: Vehicle) {
    this.router.navigateByUrl('stock_information/' + vehicle.vehicle_id);
  }

  deleteVehicle(vehicle: Vehicle) {
    this.stockService.deleteVehicle(vehicle.vehicle_id).subscribe(
      data => console.log(data)
    );
    this.Vehicles = this.stockService.getVehicles();
  }
}



