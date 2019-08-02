import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlockChain } from '../app.blockchain.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.appstate';

@Component({
  selector: 'app-displaystatemanagement',
  templateUrl: './displaystatemanagement.component.html',
  styleUrls: ['./displaystatemanagement.component.css']
})
export class DisplaystatemanagementComponent implements OnInit {


  coins: Observable<BlockChain[]>;

  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockChain);
  }

  ngOnInit() {
  }

}
