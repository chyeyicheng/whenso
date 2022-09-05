import { createSlice, configureStore } from "@reduxjs/toolkit";

// get token from local storage

const initialState = {
	token: "",
	isLoggin: false,
	message: "its working",
};

const token = localStorage.getItem("token");
if (token) {
	initialState.token = token;
	initialState.isLoggin = true;
}

const tokenSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		addToken(state, action) {
			state.token = action.payload;
			state.isLoggin = true;
		},

		removeToken(state) {
			state.token = "";
			state.isLoggin = false;
		},

		tokenStorage(state, action) {
			state.token = action.payload;
			state.isLoggin = true;
		},
	},
});

const store = configureStore({
	reducer: tokenSlice.reducer,
});

export const tokenActions = tokenSlice.actions;
export default store;
