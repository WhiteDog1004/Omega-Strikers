import { DraggableDatas } from "@/components/Draggable";
import Image from "next/image";

const Home = () => {
	return (
		<div className="App">
			<title>OmegaStrikers</title>
			<DraggableDatas />
			<Image
				src={"/OmegaStrikers.png"}
				alt={"logo"}
				width={300}
				height={100}
				style={{
					position: "absolute",
					right: "20px",
					bottom: "20px",
				}}
			/>
			<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
		</div>
	);
};

export default Home;
