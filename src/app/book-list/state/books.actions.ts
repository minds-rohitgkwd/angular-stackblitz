import {createActionGroup, props} from '@ngrx/store'
import { createAction } from '@ngrx/store/src/action_creator';
import { Book } from '../books.model';

export const booksActions = createActionGroup(
  {
    source : 'Books',
  events: {
    'addBook' : props<{bookId : string}>(),
    'removeBook': props<{bookId : string}>()
  }
  }
)


export const booksApiActions = createActionGroup({
  source : 'Books Api',
  events : {
    'retriveBookList' : props<{booksList : Array<Book>}>()
  }
})