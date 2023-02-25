import React from "react";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/contacts";

function ContactList(props) {
	const deleteContactHandler = (id) => {
		props.getContactId(id);
	};

	const renderContactList = props.contacts.map((contact) => {
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
				{props.contacts.length !== 0 ? (
					renderContactList
				) : (
					<div
						style={{
							fontFamily: "monospace",
							fontSize: "18px",
							fontWeight: "bold",
						}}
					>
						No contacts yet
					</div>
				)}
			</div>
		</div>
	);
}

export default ContactList;
