import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indoor',
  templateUrl: './indoor.component.html',
  styleUrls: ['./indoor.component.css']
})
export class IndoorComponent implements OnInit {
  massEditing = false;
  handEditing = false;
  antitheftEditing = false;
  standEditing = false;
  plateEditing = false;
  occupantEditing = false;
  constructor() { }

  ngOnInit() {
  }

}
