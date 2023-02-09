import { createFeatureSelector, createSelector, State } from "@ngrx/store";
import { CounterState } from "./counter.state";

// to access the counter state (all the para. of the counter state interface)
export const getCounterState= createFeatureSelector<CounterState>('counter');

export const getCounter=createSelector(getCounterState, State => {
    return State.counter
})

export const getChannel=createSelector(getCounterState, State => {
    return State.channelName
})