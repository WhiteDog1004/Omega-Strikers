import { Map } from "@/components/Map";
import { Inter } from "next/font/google";
import { useState } from "react";
import Draggable, { DraggableData } from "react-draggable";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
	// 업데이트 되는 값을 set 해줌
	const trackPos = (data: DraggableData) => {
		setPosition({ x: data.x, y: data.y });
	};
	return (
		<div className="App">
			<Draggable onDrag={(e, data) => trackPos(data)}>
				<div className="box">
					<div>Char</div>
					<div>
						x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
					</div>
				</div>
			</Draggable>
			<Map />
		</div>
	);
}
