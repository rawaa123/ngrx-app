import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { addChnnel, addCustomInput, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";

const _counterReducer=createReducer(
    initialState, 
    on(increment, (state) => {
return{
    // take the initail state as it is
    ...state,
    // change the state
    counter:state.counter+1,
};

    }),on(decrement, (state)=> {
        return {
            ...state,
            counter:state.counter-1, 
        }
    }), on(reset, (state)=> {
        return{
            ...state,
            counter:0
        }
    }), on(addCustomInput, (state, action)=> {
        console.log(action)
        console.log(state)
        return{
            
            ...state,
            //state.counter is the current state not the initail state
            counter: action.value + state.counter
        }
    }), on(addChnnel, (state, action)=> {
        console.log(action)
        console.log(state)
        return{
            
            ...state,
            //state.counter is the current state not the initail state
            channelName: action.channelName 
        }
    })
    )

export function counterReducer(state: { counter: number; channelName:string  } | undefined, action: Action) {
    return _counterReducer(state, action);
  }