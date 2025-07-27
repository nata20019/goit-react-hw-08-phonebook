import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
    isError: false,
    isLoading: false,
  },
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

export const { updateFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
