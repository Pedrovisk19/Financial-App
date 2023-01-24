import { useState } from "react";
import { Text } from "@chakra-ui/react";
import AmountCards from "../../components/amountCards";

function SeeAll({ setShow }) {
	const showAllCards = (e) => {
		setShow(false);
	};
	return (
		// {show && }
		<div className="father">
			<div className="seeAllCards">
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
					Close
				</Text>
				<div>
					<AmountCards />
				</div>
			</div>
		</div>
	);
}

export default SeeAll;
