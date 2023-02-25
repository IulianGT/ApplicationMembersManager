import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();

	const handleDevelopersClick = () => {
		navigate("/developers");
	};
    
	const handleTestersClick = () => {
		navigate("/testers");
	};

	const handleDesignerClick = () => {
		navigate("/designers");
	};

	const handleAllContactsClick = () => {
		navigate("/allContacts");
	};

	return (
		<div style={{ display: "flex", marginTop: "45px" }}>
			<button
				type="button"
				className="ui button"
				onClick={handleDevelopersClick}
				style={{ backgroundColor: "aqua", fontSize: "12px", margin: "4px" }}
			>
				Developers
			</button>
			<button
				type="button"
				className="ui button"
				onClick={handleTestersClick}
				style={{ backgroundColor: "aqua", fontSize: "12px", margin: "4px" }}
			>
				Testers
			</button>
			<button
				type="button"
				className="ui button"
				onClick={handleDesignerClick}
				style={{ backgroundColor: "aqua", fontSize: "12px", margin: "4px" }}
			>
				Designers
			</button>
			<button
				type="button"
				className="ui button"
				onClick={handleAllContactsClick}
				style={{ backgroundColor: "aqua", fontSize: "12px", margin: "4px" }}
			>
				AllContacts
			</button>
		</div>
	);
}

export default HomePage;
