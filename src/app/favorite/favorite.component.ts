import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite!: boolean;
  @Output() change = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    //console.log('Ng Onit -');
    console.log('Ng Onit -'+this.isFavorite);

  }

  onClick(){
    this.isFavorite = !this.isFavorite;
    console.log('Click -'+this.isFavorite);
    this.change.emit(this.isFavorite);
  }

}
