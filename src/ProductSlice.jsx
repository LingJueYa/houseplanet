import { createSlice } from '@reduxjs/toolkit';
import data from './data';


const productSlice = createSlice({
  name: 'products',
  initialState: data,
  reducers: {},
});

export default productSlice.reducer;
