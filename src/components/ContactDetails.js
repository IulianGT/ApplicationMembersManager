import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import userProfilePic from "../images/userProfilePic.jpg";

function ContactDetails(props) {
	const location = useLocation();
	const navigate = useNavigate();

	const { id, name, email, notes } = location.state.contact;

	const [note, setNote] = useState("");

	const [arrayOfNotes, setArrayOfNotes] = useState(
		location.state.contact.notes
	);

	useEffect(() => {
		setArrayOfNotes(notes);
	}, []);

	const addNote = (contact, message) => {
		props.addNoteHandler(contact, message);
		setArrayOfNotes([...arrayOfNotes, message]);
		setNote("")
	};

	return (
		<div className="main" style={{ marginTop: "45px" }}>
			<div className="ui card centered">
				<div className="image">
					<img src={userProfilePic} alt="user" />
				</div>
				<div className="content">
					<div className="header">{name}</div>
					<div className="description">{email}</div>
				</div>
			</div>
			<div
				className="ui input field"
				style={{
					display: "flex",
					flexDirection: "column",
					margin: "10px",
					alignItems: "center",
				}}
			>
				<input
					type="text"
					value={note}
					placeholder="Note"
					onChange={(e) => setNote(e.target.value)}
					style={{ width: "520px" }}
				></input>
				<button
					onClick={() => addNote(location.state.contact, note)}
					style={{ marginTop: "10px", width: "250px" }}
				>
					Add Note
				</button>
			</div>
			<div
				className="ui celled list"
				style={{
					display: "flex",
					flexDirection: "column",
					margin: "10px",
					alignItems: "center",
				}}
			>
				{arrayOfNotes.map((note) => {
					return (
						<div
							className="ui card"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								width: "400px",
							}}
						>
							<h4 style={{ margin: "10px" }}>{note}</h4>
							<button
								style={{
									border: "none",
									width: "100px",
									borderRadius: "10px",
									backgroundColor: "green",
									marginBottom: "5px",
								}}
							>
								Done
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ContactDetails;
