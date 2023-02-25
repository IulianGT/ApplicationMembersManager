import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();

	const handleAddContactButton = () => {
		navigate("/add");
	};

	const handleContactsOnClick = () => {
		navigate("/");
	};
	return (
		<div className="ui fixed menu">
			<div
				className="ui container center"
				style={{ alignItems: "center", height: "40px" }}
			>
				<h2 style={{ margin: "0px 10px" }}>Contact Manager</h2>
			</div>

			<button
				className="ui button"
				onClick={handleContactsOnClick}
				style={{ backgroundColor: "aqua", fontSize: "12px", margin: "4px" }}
			>
				Contacts
			</button>
			<button
				className="ui button"
				onClick={handleAddContactButton}
				style={{ backgroundColor: "aqua", fontSize: "12px", margin: "4px" }}
			>
				Add Contact
			</button>
		</div>
	);
};

export default Header;
