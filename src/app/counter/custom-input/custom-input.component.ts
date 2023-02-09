import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCustomInput, addChnnel } from '../state/counter.action';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements OnInit {
value:number;
channelName:string;
  constructor(private store: Store<{counter:CounterState}>) { }

  ngOnInit(): void {
  }
  onAdd(){
    // we add + before the variable to convert it to number
    this.store.dispatch(addCustomInput({value:+this.value}))

  }
  onAddchannelName(){
    this.store.dispatch(addChnnel({channelName:this.channelName}))
  }
}
