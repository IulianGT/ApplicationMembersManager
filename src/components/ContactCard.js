import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ContactCard(props) {
	const { id, name, email, role } = props.contact;

	return (
		<div
			className="item"
			style={{ display: "flex", marginTop: "40px" }}
			key={id}
		>
			<div
				style={{
					borderRadius: "100px",
					margin: "10px 0px",
					backgroundColor: "gray",
					width: "100px",
					height: "60px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div style={{ fontWeight: "bold" }}>{role}</div>
			</div>

			<div className="content" style={{ margin: "10px 15px" }}>
				<Link to={`${id}`} state={{ contact: props.contact }}>
					<div className="header">{name}</div>
					<div style={{ color: "black" }}>{email}</div>
				</Link>
				<div>
					<i
						className="trash alternate outline icon"
						style={{
							color: "red",
							marginTop: "7px",
							fontSize: "20px",
							cursor: "pointer",
						}}
						onClick={() => props.removeHandlerClick(id)}
					/>
					<Link to="/edit" state={{ contact: props.contact }}>
						<i
							className="edit alternate outline icon"
							style={{
								color: "green",
								marginTop: "7px",
								fontSize: "20px",
								marginLeft: "10px",
								cursor: "pointer",
							}}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
