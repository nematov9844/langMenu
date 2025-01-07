/** @format */

import { createStore } from "redux";

const initialState = {
	language: "eng",
};

const languageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_LANGUAGE":
			return {
				...state,
				language: action.payload,
			};
		default:
			return state;
	}
};

const store = createStore(languageReducer);

export default store;
