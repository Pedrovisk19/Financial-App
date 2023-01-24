import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import {
	addDoc,
	collection,
	getDocs,
	getFirestore,
	onSnapshot,
} from "firebase/firestore";
import { ContactsAdded } from "../../fakeDBContacts";
const firebaseApp = initializeApp({
	apiKey: "AIzaSyAvIfJOnl7xDeFLCJtoN4OyiogaQdiKbos",
	authDomain: "financial-app-2f8c0.firebaseapp.com",
	projectId: "financial-app-2f8c0",
	// experimentalForceLongPolling: true,
});

const db = getFirestore(firebaseApp);
const useCollectionRef = collection(db, "contacts");
const query = collection(db, "path-to-collection");
onSnapshot(query, (snap) => {
	console.log("");
});
useEffect(() => {
	const getContacts = async () => {
		const data = await getDocs(useCollectionRef);
		ContactsAdded.push(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};
	getContacts();
}, []);
