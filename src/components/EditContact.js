import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditContact(props) {
	const location = useLocation();

	const [name, setName] = useState(location.state.contact.name);
	const [email, setEmail] = useState(location.state.contact.email);
	const [role, setRole] = useState(location.state.contact.role);
	const [contact, setContact] = useState({
		id: location.state.contact.id,
		name: name,
		email: email,
	});

	const [tester, setTester] = useState(
		location.state.contact.role === "Tester" ? true : false
	);

	const handleTesterClick = () => {
		setDeveloper(false);

		setTester(true);
		setRole("Tester");

		setDesigner(false);
	};

	const [developer, setDeveloper] = useState(
		location.state.contact.role === "Developer" ? true : false
	);

	const handleDeveloperClick = () => {
		setDeveloper(true);
		setRole("Developer");

		setTester(false);
		setDesigner(false);
	};

	const [designer, setDesigner] = useState(
		location.state.contact.role === "Designer" ? true : false
	);

	const handleDesignerClick = () => {
		setDeveloper(false);
		setTester(false);

		setDesigner(true);
		setRole("Designer");
	};

	const navigate = useNavigate();

	useEffect(() => {
		setContact({
			id: location.state.contact.id,
			name: name,
			email: email,
			role: role,
			notes: location.state.contact.notes,
		});
	}, [name, email, role]);

	const update = (e) => {
		//verific daca campurile sunt populate. daca nu sunt arunc o alerta
		e.preventDefault();
		if (name === "" || email === "") {
			alert("fields can not be empty!");
			return;
		}

		// ma duc la metoda din App.js ca sa actualizez informatiile
		//{id, ...contact} pune alaturi de noile date din campuri, id ul persoanei careia vreau sa i editez datele
		props.editContactHandler(contact);
		navigate("/");
	};

	return (
		<div className="ui main">
			<h2 style={{ marginTop: "45px" }}>Edit contact</h2>
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
				<button className="ui button" onClick={update}>
					Update
				</button>
			</form>
		</div>
	);
}

export default EditContact;
