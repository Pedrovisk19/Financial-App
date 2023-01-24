import { useEffect, useRef, useState } from "react";

import NavBar from "@/components/NavBar/navbar";
import "../api/contacts";

function MyContacts() {
	return (
		<>
			<NavBar />
			<h1>Você não possui nenhum contato</h1>
		</>
	);
}

export default MyContacts;
