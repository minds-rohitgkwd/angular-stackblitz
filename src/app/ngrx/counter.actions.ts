import { createAction } from '@ngrx/store';

export const increment = createAction('');
export const decrement = createAction('[counter component] Decrement');
export const reset = createAction('[counter component] Reset');
