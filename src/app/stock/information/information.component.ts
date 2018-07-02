import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {StockService, Vehicle, VehicleParam} from "../stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  editing: boolean = false;
  paraEditing = false;
  paraShow = false;
  imgName = 'default.png';
  photoUrl: string;
  vehicle_id: number;
  vehicleParam = new VehicleParam(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0);
  vehicle = new Vehicle(0, '', '', '', 0, 0, '');
  uploader: FileUploader = new FileUploader({
    url: 'http://www.download.com:80/uploadFile',
    method: 'POST',
    itemAlias: 'uploadedfile'
  });

  public fileList;
  public uploadFile(event) {
    this.fileList = event.target.files;
  }
  constructor(private routeInfo: ActivatedRoute, public router: Router, private stockService: StockService) {
  }

  ngOnInit() {
    this.vehicle_id = this.routeInfo.snapshot.params['id'];
    this.stockService.getVehicle(this.vehicle_id).subscribe(
      data => {
        this.vehicle = data[0];
        if (this.vehicle.photo) {
          this.imgName = this.vehicle.photo;
        }
        this.photoUrl = 'images/' + this.imgName;
      }
    );
    this.stockService.getVehicleParam(this.vehicle_id).subscribe(
      data => {
        if (!data[0] || data.code === 1) {
          this.stockService.addVehicleParam({vehicle_id: this.vehicle_id})
            .subscribe( data1 => console.log('addVehicleParam' + JSON.stringify(data1)));
        } else {
          this.vehicleParam = data[0];
          console.log(this.vehicleParam);
        }}
    );
  }
  check() {
    this.paraEditing = !this.paraEditing;
    this.stockService.getVehicleParam(this.vehicle_id).subscribe(
      data => {
          this.vehicleParam = data[0];
          console.log(this.vehicleParam);
        }
    );
  }
  public submitUploadFile() {
    if (this.fileList.length > 0) {
      const file: File = this.fileList[0];
      const formData = new FormData();
      // formData.append('id': this.vehicle_id);
      formData.append('image', file, file.name);
      this.stockService.uploadPhoto(formData, this.vehicle_id).subscribe(
        data => {
          console.log(data);
          this.imgName = data.filename;
          this.photoUrl = 'images/' + this.imgName;
        }
      );
    }
  }
}
