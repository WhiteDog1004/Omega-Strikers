import Link from "next/link";

const Home = () => {
	return (
		<div className="App">
			<Link href={"/strategy"}>
				<span>이동</span>
			</Link>
		</div>
	);
};

export default Home;
