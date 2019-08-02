import { Component, OnInit } from '@angular/core';
import { AppState } from '../app.appstate';
import { Store } from '@ngrx/store';
import { BlockChain } from '../app.blockchain.model';

@Component({
  selector: 'app-statemanagement',
  templateUrl: './statemanagement.component.html',
  styleUrls: ['./statemanagement.component.css']
})
export class StatemanagementComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addCoin(name, price) {
    console.log('Add Coin called!!!');
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <BlockChain>{
        name: name,
        price: price
      }
    });

  }
}
