import { Text, Box, Button } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/navbar";
import { CriptoCoins } from "../../fakeDBCriptos";
// import "../../app/global.css";

export default function Cripto() {
	return (
		<>
			<NavBar />

			<div className="criptos">
				<div className="textCriptoApresentation">
					<Text
						bgClip="text"
						fontWeight="bold"
						color="#000"
						fontSize={22}
						lineHeight={10}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus{" "}
						<br />
						architecto atque nemo debitis
						<br /> minima, animi totam necessitatibus vel
						<br />
						natus nisi, ipsam harum mollitia incidunt quibusdam, iusto veniam
						<br />
						accusamus perspiciatis labore?
					</Text>
					<br />
					<Button background="#F2B880" color="white">
						Login
					</Button>
					<Button background="#4D7EA8" color="white">
						Sign Up
					</Button>
				</div>

				<div>
					<img className="imgCripto" src="/cripto.png" alt="" />
				</div>
			</div>
		</>
	);
}
1;
