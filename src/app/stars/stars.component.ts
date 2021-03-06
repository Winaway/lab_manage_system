import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  rating: number = 0;
  stars: boolean[];

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  @Input()
  readonly: boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index:number) {
    if(!this.readonly){
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
