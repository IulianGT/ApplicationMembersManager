import React, { useEffect } from "react";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import "./AddContact.css";

function AddContact(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const [contact, setContact] = useState({ name: "", email: "", role: "" });

	const [tester, setTester] = useState(true);

	const handleTesterClick = () => {
		setDeveloper(false);

		setTester(true);
		setRole("Tester");

		setDesigner(false);
	};

	const [developer, setDeveloper] = useState(true);

	const handleDeveloperClick = () => {
		setDeveloper(true);
		setRole("Developer");

		setTester(false);
		setDesigner(false);
	};

	const [designer, setDesigner] = useState(true);

	const handleDesignerClick = () => {
		setDeveloper(false);
		setTester(false);

		setDesigner(true);
		setRole("Designer");
	};

	useEffect(() => {
		const testerExists = JSON.parse(localStorage.getItem("Tester"));
		if (testerExists) setTester(testerExists);
	}, [tester]);

	const navigate = useNavigate();

	useEffect(() => {
		setContact({ name, email, role });
	}, [name, email, role]);

	const add = (e) => {
		e.preventDefault();
		if (name === "" || email === "" || role === "") {
			alert("fields can not be empty!");
			return;
		}
		console.log(contact);
		props.addContactHandler(contact);
		setName("");
		setEmail("");
		setDeveloper(true);
		setTester(true);
		setDesigner(true);
	};

	return (
		<div className="ui main">
			<h2 style={{ marginTop: "45px" }}>Add contact</h2>
			<form className="ui form">
				<div className="field">
					<label>Name</label>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div className="field">
					<label>Email</label>
					<input
						type="text"
						name="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<button
					type="button"
					style={{ padding: "10px 5px", margin: "0 15px" }}
					className={!tester ? "testerDisabled" : "none"}
					onClick={handleTesterClick}
				>
					Tester
				</button>
				<button
					type="button"
					style={{ padding: "10px 5px", margin: "0 15px" }}
					className={!developer ? "developerDisabled" : "none"}
					onClick={handleDeveloperClick}
				>
					Developer
				</button>
				<button
					type="button"
					style={{ padding: "10px 5px", margin: "0 15px" }}
					className={!designer ? "designerDisabled" : "none"}
					onClick={handleDesignerClick}
				>
					Graphic Designer
				</button>
				<div style={{ marginTop: "15px" }}></div>

				<button type="button" className="ui button" onClick={add}>
					ADD
				</button>
			</form>
		</div>
	);
}

export default AddContact;
