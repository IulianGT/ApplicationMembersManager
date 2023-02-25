import "./App.css";
import uuid from "react-uuid";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import api from "./api/contacts";
import EditContact from "./components/EditContact";
import DevelopersList from "./components/DevelopersList";
import HomePage from "./components/HomePage";
import TestersList from "./components/TestersList";
import DesignersList from "./components/DesignersList";

function App() {
	//const LOCAL_STORAGE_KEY = "contacts";

	const [contacts, setContacts] = useState({});
	// 	!localStorage.getItem(LOCAL_STORAGE_KEY)
	// 		? []
	// 		: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
	// );

	//Retrieve contacts
	const retrieveContacts = async () => {
		const response = await api.get("/contacts");

		return response.data;
	};

	useEffect(() => {
		// 	const retrieveContent = window.localStorage.getItem(LOCAL_STORAGE_KEY);
		// 	if (retrieveContent) setContacts(JSON.parse(retrieveContent));
		const getAllContacts = async () => {
			const AllContacts = await retrieveContacts();
			if (AllContacts) setContacts(AllContacts);
		};

		getAllContacts();
	}, []);

	// useEffect(() => {
	// 	//window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	// }, [contacts]);

	const addContactHandler = async (contact) => {
		const request = {
			id: uuid(),
			name: contact.name,
			email: contact.email,
			notes: [],
			role: contact.role,
		};

		const response = await api.post("/contacts", request);
		setContacts([...contacts, response.data]);
	};

	const removeContactHandler = async (id) => {
		await api.delete(`/contacts/${id}`);
		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});

		setContacts(newContactList);
		console.log(contacts);
	};

	const addNote = async (contact, note) => {
		const { id, name, email, notes } = contact;
		let newArrayOfNotes = notes;

		newArrayOfNotes = [...notes, note];

		const newContact = { ...contact, notes: newArrayOfNotes };

		const response = await api.put(`/contacts/${contact.id}`, newContact);

		setContacts(
			contacts.map((cont) => {
				if (cont.id === contact.id) return response.data;
				else return cont;
			})
		);
	};

	const editContactHandler = async (contact) => {
		const response = await api.put(`/contacts/${contact.id}`, contact);
		setContacts(
			contacts.map((cont) => {
				if (cont.id === contact.id) return response.data;
				else return cont;
			})
		);
	};
	return (
		<Router>
			<div className="Display-Container">
				<div className="ui container">
					<Header className="Header" />
					<br></br>
					<Routes>
						<Route
							path="/add"
							element={<AddContact addContactHandler={addContactHandler} />}
						/>
						<Route
							path="/edit"
							element={<EditContact editContactHandler={editContactHandler} />}
						/>
						<Route
							path="/allContacts"
							element={
								<ContactList
									contacts={contacts}
									getContactId={removeContactHandler}
									editContactHandler={editContactHandler}
								/>
							}
						/>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/designers/:id"
							element={<ContactDetails addNoteHandler={addNote} />}
						/>
						<Route
							path="/testers/:id"
							element={<ContactDetails addNoteHandler={addNote} />}
						/>
						<Route
							path="/designers/:id"
							element={<ContactDetails addNoteHandler={addNote} />}
						/>
						<Route
							path="/allContacts/:id"
							element={<ContactDetails addNoteHandler={addNote} />}
						/>
						<Route
							path="/developers"
							element={
								<DevelopersList
									contacts={contacts}
									getContactId={removeContactHandler}
									editContactHandler={editContactHandler}
								/>
							}
						/>
						<Route
							path="/testers"
							element={
								<TestersList
									contacts={contacts}
									getContactId={removeContactHandler}
									editContactHandler={editContactHandler}
								/>
							}
						/>
						<Route
							path="/designers"
							element={
								<DesignersList
									contacts={contacts}
									getContactId={removeContactHandler}
									editContactHandler={editContactHandler}
								/>
							}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
