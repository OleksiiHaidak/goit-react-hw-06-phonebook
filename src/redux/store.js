import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts.reducer";
import { filterReducer } from "./filter/filter.reducer";

export const store = configureStore({
  reducer: {
    contactsStore: contactsReducer,
    contactFilter: filterReducer,
  },
});