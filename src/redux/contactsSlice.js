import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "people",
  initialState: {
    people: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  reducers: {
    handleDeleteContacts: (state, action) => {
      state.people = state.people.filter(
        (person) => person.id !== action.payload
      );
    },
    addContact:(state,action)=>{
      state.people.push(action.payload)
    }
  },

});

export const { handleDeleteContacts, addContact } = slice.actions;
export default slice.reducer;
