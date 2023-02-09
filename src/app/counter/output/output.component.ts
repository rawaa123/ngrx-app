import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getChannel, getCounter } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  // counter$: Observable<{ counter: number }> ;
  // channelName$: Observable<{ channelName: string }> ;
  //  channelName:string;
  //  counter:number;
  counter$: Observable< number > ;
  channelName$: Observable< string > ;
  constructor(private store: Store<{counter:CounterState}>) { }

  ngOnInit(): void {
    // counter is the counter injected in the store up in this statmet (private store: Store<{counter:{counter:number}}>))
   //this.counter$=this.store.select('counter');
  

    // this.store.select('counter').subscribe((data) => {
    //   console.log("counter observable called")
    //   this.counter=data.counter})

    //     this.store.select(getCounter).subscribe((data) => {
    // console.log("counter observable called")
    //  this.counter=data})
    
  //  this.store.select('counter').subscribe((data) => {
  //   console.log("channel name observable called")
  //   this.channelName=data.channelName})

  // this.store.select(getChannel).subscribe((data) => {
  //   console.log("channel name observable called")
  //   this.channelName=data})
  
  this.counter$ =this.store.select(getCounter);
  this.channelName$=this.store.select(getChannel);
  }

}
