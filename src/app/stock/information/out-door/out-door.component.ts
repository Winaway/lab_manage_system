import { Component, OnInit } from '@angular/core';
import {StockService, Vehicle} from "../../stock.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-out-door',
  templateUrl: './out-door.component.html',
  styleUrls: ['./out-door.component.css']
})
export class OutDoorComponent implements OnInit {
  vehicle_id: number;
  vehicle = new Vehicle(0, '', '', '', 0, 0, '');
  brakeEditing = false;
  speedoEditing = false;
  hornEditing = false;
  speedEditing = false;
  steerEditing = false;
  constructor(private routeInfo: ActivatedRoute, private stockService: StockService) { }

  ngOnInit() {
    this.vehicle_id = this.routeInfo.snapshot.params['id'];
    this.stockService.getVehicle(this.vehicle_id).subscribe(
      data => {
        this.vehicle = data[0];
      }
    );
  }
  doPrint(div) {
    var docHead = document.head.outerHTML;
    var printContents = document.getElementById(div).outerHTML;
    var winAttr = 'location=yes, statusbar=no, menubar=no, titlebar=no, toolbar=no,dependent=no, width=865, height=600, resizable=yes, screenX=200, screenY=200, personalbar=no, scrollbars=yes';

    var newWin = window.open("", '_blank', winAttr);
    var writeDoc = newWin.document;
    writeDoc.open();
    writeDoc.write('<!doctype html><html>' + docHead + '<body onLoad="window.print()">' + printContents + '</body></html>');
    writeDoc.close();
    newWin.focus();
  }
}
