import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	getFirestore,
	onSnapshot,
} from "firebase/firestore";
import {
	Input,
	Button,
	Text,
	Stack,
	Divider,
	ButtonGroup,
	Heading,
	toa,
	useToast,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

import NavBar from "@/components/NavBar/navbar";
import { CloseIcon } from "@chakra-ui/icons";

function AddContacts() {
	const toast = useToast();

	const [name, setName] = useState("");
	const [pix, setPix] = useState("");
	const [email, setEmail] = useState("");
	const [contato, setContato] = useState([]);
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

	async function deleteContacts(id) {
		const contactDoc = doc(db, "contacts", id);
		await deleteDoc(contactDoc);
		location.reload();
	}

	async function createContacts() {
		const contact = await addDoc(useCollectionRef, {
			name,
			pix,
			email,
		});

		console.log(contact);
	}

	useEffect(() => {
		const getContacts = async () => {
			const data = await getDocs(useCollectionRef);
			setContato(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getContacts();
	}, []);

	const listContact = () =>
		contato.map((contact) => {
			return (
				<>
					<Card maxW="sm">
						<CardBody>
							<Stack mt="6" spacing="3">
								<Heading fontSize={25}>{contact.name}</Heading>
								<Text fontSize={14}>{contact.email}</Text>
								<Text color="purple.600" fontSize={14}>
									{contact.pix}
								</Text>
							</Stack>
						</CardBody>
						<Divider />
						<CardFooter>
							<ButtonGroup spacing="2">
								<Button variant="solid" colorScheme="purple">
									Transfer
								</Button>
								<Button
									variant="ghost"
									color="#FE5F55"
									onClick={() => {
										deleteContacts(contact.id);
										toast({
											title: "Error",
											description: "Contacts Deleted.",
											status: "error",
											duration: 9000,
											isClosable: true,
											position: "top-right",
										});
									}}
								>
									Delete Contact
								</Button>
							</ButtonGroup>
						</CardFooter>
					</Card>
				</>
			);
		});

	const removeForm = () => {
		document.querySelector(".formAddContacts").classList.remove("callForm");
	};
	const callContacts = () => {
		document.querySelector(".formAddContacts").classList.add("callForm");
	};

	return (
		// {show && }
		<>
			<NavBar />
			<div className="addContact">
				<Button className="callContacts" onClick={callContacts}>
					Add Contact
				</Button>
			</div>
			<div className="formAddContacts ">
				<form action="" className="formContact">
					<div className="title">
						<Text fontSize={22} fontWeight="bold">
							ADD CONTACTS
						</Text>
						<CloseIcon color="#FE5F55" onClick={removeForm} />
					</div>

					<Input
						variant="flushed"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Input
						variant="flushed"
						placeholder="Pix"
						value={pix}
						onChange={(e) => setPix(e.target.value)}
					/>
					<Input
						variant="flushed"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Button
						colorScheme="purple"
						onClick={() => {
							createContacts();

							toast({
								title: "success",
								description: "Contact Added. Please, reload your window!!",
								status: "success",
								duration: 9000,
								isClosable: true,
								position: "top-right",
							});
							setTimeout(() => {
								removeForm();
							}, 2000);
						}}
					>
						Add
					</Button>
				</form>
			</div>
			<div className="contacts">{listContact()}</div>
		</>
	);
}

export default AddContacts;
