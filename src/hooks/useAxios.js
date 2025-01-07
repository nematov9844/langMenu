/** @format */

import axios from "axios";

export const useAxios = () => {
	const response = ({ url, method = "GET", body, params, headers }) => {
		return axios({
			url: `https://uneversal-backend.onrender.com${url}`,
			method,
			data: body,
			params: { ...params },
			headers: { ...headers },
		}).then((res) => res.data);
	};

	return response;
};
