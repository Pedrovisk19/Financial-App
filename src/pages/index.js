import Main from "../pages/Main";
import NavBar from "../components/NavBar/navbar";
// import Link from "next/link";

export default function Home() {
	return (
		<div className="home">
			<NavBar />
			<Main />
		</div>
	);
}
