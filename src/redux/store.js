import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const increment = createAction('filter/increment');

console.log(increment('sdsdv'));

const contactsReduser = createReducer([], {});
const filterReduser = createReducer('', {});

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});
