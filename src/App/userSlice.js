import { nanoid, createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	name: '',
	email: '',
	password: '',
};

export const userSlice = createSlice({
	name: 'redux-user',
	initialState,
	reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
