import { useEffect, useState } from "react";
import { CreditCards } from "../../fakeDBCards";
// import "./styles.css";

function AmountCards() {
	const [balance, setbalance] = useState("$12.558");

	const selectBalance = (credit) => {
		setbalance(credit.balance);
	};

	const [credits, setCreditCards] = useState([]);

	const getCreditCards = () => {
		setCreditCards(CreditCards);
	};

	useEffect(() => {
		getCreditCards();
	}, []);

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
	return <>{AllCards()}</>;
}

export default AmountCards;
