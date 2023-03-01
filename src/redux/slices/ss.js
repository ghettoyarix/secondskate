import { createSlice } from '@reduxjs/toolkit';
import { collection, addDoc } from 'firebase/firestore';

const initialState = {};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    uploadItem: (state, action) => {
      try {
        const docRef = addDoc(collection(db, 'users'), {
          first: 'Ada',
          last: 'Lovelace',
          born: 1815,
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    },
  },
});

export const { show, hide } = headerSlice.actions;

export default headerSlice.reducer;
