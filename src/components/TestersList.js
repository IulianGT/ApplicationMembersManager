import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import api from "../api/contacts";

function DevelopersList(props) {
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	const renderContactList = props.contacts
		.filter((contact) => contact.role === "Tester")
		.map((contact) => {
			return (
				<ContactCard
					contact={contact}
					key={contact.id}
					removeHandlerClick={deleteContactHandler}
					className="ContactCard"
				/>
			);
		});

	return (
		<div style={{ marginTop: "45px" }}>
			<div className="ui celled list">
				{props.contacts.filter((contact) => contact.role === "Tester")
					.length !== 0 ? (
					renderContactList
				) : (
					<div
						style={{
							fontFamily: "monospace",
							fontSize: "18px",
							fontWeight: "bold",
						}}
					>
						No testers yet
					</div>
				)}
			</div>
		</div>
	);
}

export default DevelopersList;
