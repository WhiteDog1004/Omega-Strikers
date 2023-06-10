import { DraggableDatas } from "@/components/Draggable";
import {
	CreateText,
	CreateTextBox,
} from "@/components/Draggable/DraggableDatas.styled";
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
					zIndex: -1,
				}}
			/>
			<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
			<CreateTextBox>
				<CreateText>
					Creator: WolfDog
					<br />
				</CreateText>
				<CreateText style={{ top: "30px" }}>
					Discord: whitedog
				</CreateText>
			</CreateTextBox>
		</div>
	);
};

export default Home;
