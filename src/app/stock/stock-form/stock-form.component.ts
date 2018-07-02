import {Component, OnInit} from '@angular/core';
import {Stock, StockService, Vehicle} from '../stock.service';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {letProto} from "rxjs/operator/let";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel: FormGroup;

  categories = ['电动车', '燃油车', '混合动力'];

  // stock: Stock = new Stock(0,"",0,0,"",[]);
  vehicle: Vehicle = new Vehicle(0, '', '', '', 0, 0, '')

  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, public router: Router) {
  }

  ngOnInit() {
    // let stockId = this.routeInfo.snapshot.params['id'];
    //
     const fb = new FormBuilder();
    this.formModel = fb.group({
      vehicle_id: [''],
      manufacturer: ['', [Validators.required, Validators.minLength(3)]],
      VIN: ['', Validators.required],
      type: [''],
      category: [''],
      vehicle_class: ['']
    });
    // this.stockService.getStock(stockId).subscribe(
    //   data => {
    //     this.stock = data;
    //     this.formModel.reset({
    //       name: data.name,
    //       price: data.price,
    //       desc: data.desc,
    //       categories: [
    //         data.categories.indexOf(this.categories[0]) !== -1,
    //         data.categories.indexOf(this.categories[1]) !== -1,
    //         data.categories.indexOf(this.categories[2]) !== -1
    //       ]
    //     });
    //   }
    // );
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
  // const value = {
  //     manufacturer: 'aaa',
  //     type: 'xyh112',
  //     VIN: '12LL3J4K555KJ',
  //     category: 3,
  //     vehicle_class: 1
  //   };
  const value = this.formModel.value;
  this.stockService.addVehicle(value).subscribe(
    data => console.log(data)
  );
    // let chineseCategories = [];
    // let index = 0;
    // for (let i = 0; i < 3; i++) {
    //   if (this.formModel.value.categories[i]) {
    //     chineseCategories[index++] = this.categories[i];
    //   }
    // }
    // this.formModel.value.categories = chineseCategories;
    //
    // this.formModel.value.rating = this.stock.rating;
    // console.log(this.formModel.value);
    this.router.navigateByUrl('/stock');
  }

}
