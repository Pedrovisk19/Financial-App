import { useEffect, useState } from "react";
import { ContactAdded } from "@/fakeDBContacts";
import { Button, Input, Text } from "@chakra-ui/react";

function Form() {
	return (
		<>
			<div className="formAddContacts">
				<form action="">
					<Text fontSize={22} fontWeight="bold">
						ADICIONAR CONTATOS
					</Text>

					<Input
						variant="flushed"
						placeholder="Nome"
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
					<Button colorScheme="purple" onClick={createContacts}>
						Adicionar
					</Button>
				</form>
			</div>
		</>
	);
}

export default Form;
