import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite!: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log('Ng Onit -');
    console.log('Ng Onit -'+this.isFavorite);

  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
