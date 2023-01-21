import { useState, useEffect } from "react";
import { Button, Text } from "@chakra-ui/react";
// import "./styles.css";
import { CreditCards } from "../../fakeDBCards";
import About from "../about";

function Main() {
	const [balance, setbalance] = useState("$12.558");
	const [card, setCard] = useState("/card.svg");
	const [show, setShow] = useState(false);

	const selectBalance = (credit) => {
		setbalance(credit.balance);
		setCard(credit.miniCard);
	};

	const [credits, setCreditCards] = useState([]);

	const getCreditCards = () => {
		setCreditCards(CreditCards);
	};

	useEffect(() => {
		getCreditCards();
	}, []);

	const showAllCards = (e) => {
		if (show == true) {
			setShow(false);
		} else {
			setShow(true);
		}
	};

	const AllCards = () =>
		credits.map((credit) => (
			<img
				className="creditcards"
				id={"card_" + credit.id}
				key={credit.id}
				src={credit.miniCard}
				alt=""
				onClick={() => {
					selectBalance(credit);
				}}
			/>
		));

	return (
		<>
			<img className="card" src={card} alt="" />
			<div className="main">
				<div className="balance">
					<Text bgClip="text" fontWeight="regular" color="#fff">
						Your Balance
					</Text>
					<Text bgClip="text" fontWeight="Bold" color="#fff">
						{balance}
					</Text>
				</div>
				<div className="buttons">
					<Button>Sended</Button>
					<Button>Transfers</Button>
					<Button>Incomes</Button>
				</div>
				<div className="seeCards">
					<Text
						bgClip="text"
						fontWeight="regular"
						fontSize="12"
						color="#ffffff61"
					>
						Your Credit Cards
					</Text>
					<Text
						bgClip="text"
						fontWeight="Bold"
						fontSize="13"
						color="#fff"
						cursor="pointer"
						onClick={() => showAllCards()}
					>
						See All
					</Text>
					{AllCards()}
				</div>
				<div>{show && <About />}</div>
			</div>
		</>
	);
}

export default Main;
