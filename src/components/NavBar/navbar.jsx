import { Alert, AlertIcon, Box, Text, useToast } from "@chakra-ui/react";
import Link from "next/link";

function NavBar() {
	const toast = useToast();

	return (
		<>
			<div className="header">
				<div className="about">
					<Text bgClip="text" color="#000" fontSize={20} fontWeight="extrabold">
						Financial App
					</Text>
					<ul>
						<li className="li">
							<Link href="/Home">
								<Text
									bgClip="text"
									color="#000"
									fontSize={14}
									fontWeight="regular"
								>
									Home
								</Text>
							</Link>
						</li>
						<li className="li">
							<Link href="/cripto">
								<Text
									bgClip="text"
									color="#000"
									fontSize={14}
									fontWeight="regular"
								>
									Cripto
								</Text>
							</Link>
						</li>
						<li>
							<Text
								bgClip="text"
								color="#000"
								fontSize={14}
								fontWeight="regular"
								cursor="pointer"
								onClick={() =>
									toast({
										title: "Error",
										description:
											"Is not possible to add more than a 4 credit cards.",
										status: "error",
										duration: 9000,
										isClosable: true,
										position: "top-right",
									})
								}
							>
								Add Credit Cards
							</Text>
						</li>
						<li>
							<Link href="/addContacts">
								<Text
									bgClip="text"
									color="#000"
									fontSize={14}
									fontWeight="regular"
								>
									Add Contacts
								</Text>
							</Link>
						</li>
					</ul>
				</div>
				<div className="profile">
					<Text bgClip="text" color="#000" fontSize={14} fontWeight="bold">
						Pedro Souza
					</Text>
					<img className="img" src="/photo.webp" alt="" />
				</div>
			</div>
		</>
	);
}

export default NavBar;
