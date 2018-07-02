import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StarsComponent} from './stars/stars.component';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';
import { InformationComponent } from './stock/information/information.component';
import { OutDoorComponent } from './stock/information/out-door/out-door.component';
import { IndoorComponent } from './stock/information/indoor/indoor.component';
import { MassDimensionComponent } from './stock/information/indoor/mass-dimension/mass-dimension.component';
import { HandFootComponent } from './stock/information/indoor/hand-foot/hand-foot.component';
import { AntitheftComponent } from './stock/information/indoor/antitheft/antitheft.component';
import { StandComponent } from './stock/information/indoor/stand/stand.component';
import { PlateComponent } from './stock/information/indoor/plate/plate.component';
import { OccupantComponent } from './stock/information/indoor/occupant/occupant.component';
import { ElectricComponent } from './stock/information/electric/electric.component';
import { FuelComponent } from './stock/information/fuel/fuel.component';
import { ElectricSafetyComponent } from './stock/information/electric/electric-safety/electric-safety.component';
import { EnergyConsumptionComponent } from './stock/information/electric/energy-consumption/energy-consumption.component';
import { DrivingRangeComponent } from './stock/information/electric/driving-range/driving-range.component';
import { BrakeComponent } from './stock/information/out-door/brake/brake.component';
import { SpeedometerComponent } from './stock/information/out-door/speedometer/speedometer.component';
import { HornComponent } from './stock/information/out-door/horn/horn.component';
import { SteerComponent } from './stock/information/out-door/steer/steer.component';
import { MaxSpeedComponent } from './stock/information/out-door/max-speed/max-speed.component';
import { NoiseComponent } from './stock/information/fuel/noise/noise.component';
import { UserComponent } from './stock/user/user.component';
import { StatisticComponent } from './stock/statistic/statistic.component';
import { LoginComponent } from './login/login.component';
import { BrakeFormComponent } from './stock/information/out-door/brake/brake-form/brake-form.component';
import {UserService} from './stock/user.service';
import { UserFormComponent } from './stock/user/user-form/user-form.component';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
import { ReportComponent } from './report/report.component';
import { SpeedometerFormComponent } from './stock/information/out-door/speedometer/speedometer-form/speedometer-form.component';
import { MassFormComponent } from './stock/information/indoor/mass-dimension/mass-form/mass-form.component';
import { HandFormComponent } from './stock/information/indoor/hand-foot/hand-form/hand-form.component';
import { AntitheftFormComponent } from './stock/information/indoor/antitheft/antitheft-form/antitheft-form.component';
import { StandFormComponent } from './stock/information/indoor/stand/stand-form/stand-form.component';
import { PlateFormComponent } from './stock/information/indoor/plate/plate-form/plate-form.component';
import { OccupantFormComponent } from './stock/information/indoor/occupant/occupant-form/occupant-form.component';
import { HornFormComponent } from './stock/information/out-door/horn/horn-form/horn-form.component';
import { SteerFormComponent } from './stock/information/out-door/steer/steer-form/steer-form.component';
import { SpeedFormComponent } from './stock/information/out-door/max-speed/speed-form/speed-form.component';
import { ParaFormComponent } from './stock/information/para-form/para-form.component';

const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'stock', component: StockManageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/:id', component: UserFormComponent},
  {path: 'statistic', component: StatisticComponent},
  {path: 'stock/:id', component: StockFormComponent},
  {path: 'stock_information/:id', component: InformationComponent, children: [
    {path: '', component: OutDoorComponent},
    {path: 'indoor', component: IndoorComponent},
    {path: 'electric', component: ElectricComponent},
    {path: 'fuel', component: FuelComponent},
    {path: 'report', component: ReportComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    InformationComponent,
    OutDoorComponent,
    IndoorComponent,
    MassDimensionComponent,
    HandFootComponent,
    AntitheftComponent,
    StandComponent,
    PlateComponent,
    OccupantComponent,
    ElectricComponent,
    FuelComponent,
    ElectricSafetyComponent,
    EnergyConsumptionComponent,
    DrivingRangeComponent,
    BrakeComponent,
    SpeedometerComponent,
    HornComponent,
    SteerComponent,
    MaxSpeedComponent,
    NoiseComponent,
    UserComponent,
    StatisticComponent,
    LoginComponent,
    BrakeFormComponent,
    UserFormComponent,
    ReportComponent,
    SpeedometerFormComponent,
    MassFormComponent,
    HandFormComponent,
    AntitheftFormComponent,
    StandFormComponent,
    PlateFormComponent,
    OccupantFormComponent,
    HornFormComponent,
    SteerFormComponent,
    SpeedFormComponent,
    ParaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
