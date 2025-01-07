/** @format */

import axios from "axios";

export const useAxios = () => {
	const response = ({ url, method = "GET", body, params, headers }) => {
		return axios({
			url: `http://localhost:3000${url}`,
			method,
			data: body,
			params: { ...params },
			headers: { ...headers },
		}).then((res) => res.data);
	};

	return response;
};
