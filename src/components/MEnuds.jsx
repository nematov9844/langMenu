/** @format */
import { Menu } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/action";
import { useEffect } from "react";

const LanguageMenu = () => {
	const dispatch = useDispatch();

	const language = useSelector((state) => state.language);

	useEffect(() => {
		const savedLanguage = localStorage.getItem("lang");
		if (savedLanguage) {
			dispatch(setLanguage(savedLanguage));
		}
	}, [dispatch]);

	const handleMenuClick = (e) => {
		const selectedLanguage = e.key;
		dispatch(setLanguage(selectedLanguage));
		localStorage.setItem("lang", selectedLanguage);
	};

	const menuItems = [
		{ key: "eng", label: "English" },
		{ key: "uzb", label: "O‘zbek" },
		{ key: "rus", label: "Русский" },
	];

	return (
		<div>
			<h1 style={{ marginBottom: "16px" }}>Current Language: {language}</h1>
			<Menu
				onClick={handleMenuClick}
				selectedKeys={[language]}
				mode='horizontal'
				items={menuItems}
			/>
		</div>
	);
};

export default LanguageMenu;
