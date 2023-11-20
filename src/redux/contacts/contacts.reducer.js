import { createSlice } from "@reduxjs/toolkit";

const contactsData = [];

const initialState = {
     contacts: JSON.parse(localStorage.getItem("contactlst")) ?? contactsData,
 };

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
      addContact(state, {payload}) {
          state.contacts = [...state.contacts, payload];
        //state.contacts.push(payload);
    },
      deleteContact(state, {payload}) {
          state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const {addContact, deleteContact} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;