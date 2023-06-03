import Image from "next/image";
import { useRef } from "react";
import Draggable from "react-draggable";
import { useIsOpenChar } from "../../../stores/CharacterStore";
import { useIsOpenMap, useMapValue } from "../../../stores/MapStore";
import { SettingButton } from "../SettingButton";
import { CharacterAdd } from "./CharacterAdd";
import {
	DragBall,
	DragBallBox,
	DraggableCharBox,
	DraggableContainer,
	DraggableMapBox,
} from "./DraggableDatas.styled";
import { MapChange } from "./MapChange";
import { OpenChar } from "./OpenChar";

export const DraggableDatas = () => {
	const ref = useRef(null);
	const mapValue = useMapValue();
	const isOpenMap = useIsOpenMap();
	const isOpenChar = useIsOpenChar();

	const handleCharacter = () => {
		console.log("click");
	};
	return (
		<DraggableContainer>
			<Draggable
				onDrag={() => {}}
				handle=".dragBox"
				bounds=".container"
				nodeRef={ref}
				defaultPosition={{ x: 475, y: 245 }}
			>
				<DragBallBox ref={ref} className="dragBox">
					<DragBall
						priority
						src={"/ball.png"}
						alt={"ball"}
						width={50}
						height={50}
					/>
				</DragBallBox>
			</Draggable>

			<Draggable
				onDrag={() => {}}
				handle=".dragBox"
				bounds=".container"
				nodeRef={ref}
			>
				<DraggableCharBox
					className="dragBox no-cursor"
					ref={ref}
					onClick={handleCharacter}
				>
					<CharacterAdd />
				</DraggableCharBox>
			</Draggable>
			<DraggableMapBox className="container">
				<Image
					priority
					src={`/map/NoText_${mapValue}.png`}
					alt={"map"}
					width={1920}
					height={1080}
				/>
			</DraggableMapBox>
			<SettingButton />
			{isOpenMap && <MapChange />}
			{isOpenChar && <OpenChar />}
		</DraggableContainer>
	);
};
