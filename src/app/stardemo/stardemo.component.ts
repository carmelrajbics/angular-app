import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stardemo',
  templateUrl: './stardemo.component.html',
  styleUrls: ['./stardemo.component.css']
})
export class StardemoComponent implements OnInit {

  @Input()   // Accetpts input from parents
  isFavorite=false;
  onClick(){
  this.isFavorite=!this.isFavorite;
} 

  constructor() { }

  ngOnInit() {
  }


}


