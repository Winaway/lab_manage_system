import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class StockService {
  constructor(public http: Http) {
  }


  getStocks(): Observable<Stock[]> {
    return this.http.get('/api/stock').map(res => res.json());
  }

  getStock(id: number): Observable<Stock> {
    return this.http.get('/api/stock/' + id).map(res => res.json());
  }
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get('/api/vehicle/queryAll').map(res => res.json());
  }
  getVehicle(id: number): Observable<Vehicle> {
    return this.http.get('/api/vehicle/query?id=' + id).map(res => res.json());
  }
  deleteVehicle(id: number): any {
    return this.http.get('/api/vehicle/delete?id=' + id).map(res => res.json());
  }
  addVehicle(value): Observable<any> {
    return this.http.post('/api/vehicle/addVehicle', value).map(res => res.json());
  }
  uploadPhoto(formData, id): Observable<any> {
    return this.http.post('/api/vehicle/updatePhoto?id=' + id, formData).map(res => res.json());
  }
  // Vehicle Parameter
  getVehicleParam(id: number): Observable<any> {
    return this.http.get('/api/vehicle/queryParam?id=' + id).map(res => res.json());
  }
  addVehicleParam(value): Observable<any> {
    return this.http.post('/api/vehicle/addVehicleParam', value).map(res => res.json());
  }
  updateVehicleParam1(value, id: number): Observable<any> {
    return this.http.post('/api/vehicle/updateVehicleParam1?id=' + id, value).map(res => res.json());
  }
  updateVehicleParam2(value, id: number): Observable<any> {
    return this.http.post('/api/vehicle/updateVehicleParam2?id=' + id, value).map(res => res.json());
  }
  // Brake reference
  getBrake(id: number): Observable<any> {
    return this.http.get('/api/brake/query?id=' + id).map(res => res.json());
  }
  addBrake(value): Observable<any> {
    return this.http.post('/api/brake/addBrake', value).map(res => res.json());
  }
  updateBrake1(value, id): Observable<any> {
    return this.http.post('/api/brake/updateBrake1?id=' + id, value).map(res => res.json());
  }
  updateBrake2(value, id): Observable<any> {
    return this.http.post('/api/brake/updateBrake2?id=' + id, value).map(res => res.json());
  }
  updateBrake3(value, id): Observable<any> {
    return this.http.post('/api/brake/updateBrake3?id=' + id, value).map(res => res.json());
  }
  updateBrake4(value, id): Observable<any> {
    return this.http.post('/api/brake/updateBrake4?id=' + id, value).map(res => res.json());
  }
  updateBrake5(value, id): Observable<any> {
    return this.http.post('/api/brake/updateBrake5?id=' + id, value).map(res => res.json());
  }
  // speedometer reference
  getSpeedometer(id: number): Observable<any> {
    return this.http.get('/api/speedometer/query?id=' + id).map(res => res.json());
  }
  addSpeedometer(value): Observable<any> {
    return this.http.post('/api/speedometer/addSpeedometer', value).map(res => res.json());
  }
  updateSpeedometer1(value, id): Observable<any> {
    return this.http.post('/api/speedometer/updateSpeedometer1?id=' + id, value).map(res => res.json());
  }
  updateSpeedometer2(value, id): Observable<any> {
    return this.http.post('/api/speedometer/updateSpeedometer2?id=' + id, value).map(res => res.json());
  }
  updateSpeedometer3(value, id): Observable<any> {
    return this.http.post('/api/speedometer/updateSpeedometer3?id=' + id, value).map(res => res.json());
  }
}

export class Stock {
  constructor(public id: number,
              public manufacturer: string,
              public type: string,
              public category: number) {

  }
}
export class Vehicle {
  constructor(
    public vehicle_id: number,
    public manufacturer: string,
    public VIN: string,
    public type: string,
    public category: number,
    public vehicle_class: number,
    public photo: string
  ) {}
}
export class Brake {
  constructor(
    public id: number,
    public vehicle_id: number,
    public v_dry_front: number,
    public s_dry_front: number,
    public mfdd_dry_front: number,
    public f_dry_front: number,
    public v_dry_rear: number,
    public s_dry_rear: number,
    public mfdd_dry_rear: number,
    public f_dry_rear: number,
    public v_dry_cbs_unloaded: number,
    public s_dry_cbs_unloaded: number,
    public mfdd_dry_cbs_unloaded: number,
    public f_dry_cbs_unloaded: number,
    public v_dry_cbs_loaded: number,
    public s_dry_cbs_loaded: number,
    public mfdd_dry_cbs_loaded: number,
    public f_dry_cbs_loaded: number,
    public v_dry_emerg_unloaded: number,
    public s_dry_emerg_unloaded: number,
    public mfdd_dry_emerg_unloaded: number,
    public f_dry_emerg_unloaded: number,
    public v_dry_emerg_loaded: number,
    public s_dry_emerg_loaded: number,
    public mfdd_dry_emerg_loaded: number,
    public f_dry_emerg_loaded: number,
    public v_dry_all_unloaded: number,
    public s_dry_all_unloaded: number,
    public f_dry_all_unloaded_front: number,
    public f_dry_all_unloaded_rear: number,
    public v_dry_high_speed_unloaded: number,
    public s_dry_high_speed_unloaded: number,
    public mfdd_dry_high_speed_unloaded: number,
    public f_dry_high_speed_unloaded_front: number,
    public f_dry_high_speed_unloaded_rear: number,
    public v_cbsfailure_loaded_front: number,
    public s_cbsfailure_loaded_front: number,
    public mfdd_cbsfailure_loaded_front: number,
    public f_cbsfailure_loaded_front: number,
    public v_cbsfailure_loaded_rear: number,
    public s_cbsfailure_loaded_rear: number,
    public mfdd_cbsfailure_loaded_rear: number,
    public f_cbsfailure_loaded_rear: number
  ) {}
}
export class Speedometer {
  constructor(
    public id: number,
    public vehicle_id: number,
    public v_true_1: number,
    public v_display_1: number,
    public v_true_2: number,
    public v_display_2: number,
    public v_true_3: number,
    public v_display_3: number
  ) {}
}
export class VehicleParam {
  constructor(
    public id: number,
    public vehicle_id: number,
    public max_speed: number,
    public mass_in_running_order: number,
    public max_mass: number,
    public brake_type_front: number,
    public brake_type_rear: number,
    public tire_pressure_front: number,
    public tire_pressure_rear: number,
    public p_30mins: number,
    public rotate_speed_30mins: number,
    public Tmax: number,
    public rotate_speed_tmax: number,
    public voltage: number,
    public battary_mass: number,
    public battary_num: number,
    public battary_storage: number
  ) {}
}

