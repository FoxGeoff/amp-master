import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  starWidth: number;
  @Input() rating: number;
  @Output() ratingClicked : EventEmitter<string> =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }

  onClick(){
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }

}
