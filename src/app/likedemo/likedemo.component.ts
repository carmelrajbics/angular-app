import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likedemo',
  templateUrl: './likedemo.component.html',
  styleUrls: ['./likedemo.component.css']
})
export class LikedemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 @Input() 
 totalLikes=0;
 @Input() 
 iLike=false;

 onClick(){
   this.iLike=!this.iLike;
   this.totalLikes+=this.iLike?1:-1;
 }
}
