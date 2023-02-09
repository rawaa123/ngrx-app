import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<{counter:CounterState}>) { }

  ngOnInit(): void {
  }
  // dispatch the action through the store
onIncrement()
{
  // increment is the action that is to be sent to the reducer to implement it 
this.store.dispatch(increment())
}

onDecrement()
{
  this.store.dispatch(decrement())
}
onReset()
{
  this.store.dispatch(reset())
}
}
