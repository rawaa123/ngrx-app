import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const addCustomInput = createAction(
    'addCustomInput', 
    props<{value:number}>()
);
export const addChnnel = createAction(
    'addChnnel', 
    props<{channelName:string}>()
);