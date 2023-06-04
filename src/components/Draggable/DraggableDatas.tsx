import Image from "next/image";
import { useRef } from "react";
import Draggable from "react-draggable";
import {
	useAddedData,
	useCharActions,
	useIsOpenChar,
} from "../../../stores/CharacterStore";
import { useIsOpenMap, useMapValue } from "../../../stores/MapStore";
import { SettingButton } from "../SettingButton";
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
	const addedChar = useAddedData();
	const mapValue = useMapValue();
	const isOpenMap = useIsOpenMap();
	const isOpenChar = useIsOpenChar();
	const { setAddedData } = useCharActions();

	const handleDeleteChar = (data: any, index: number) => {
		setAddedData(addedChar.splice(index, 1));
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
						width={40}
						height={40}
					/>
				</DragBallBox>
			</Draggable>
			{addedChar.map((data, index) => (
				<Draggable
					key={`${data[0]}${data[1]}`}
					handle=".dragBox"
					bounds=".container"
					nodeRef={ref}
				>
					<DraggableCharBox
						className={`${
							data[1] === "team"
								? "team"
								: data[1] === "enemy"
								? "enemy"
								: "none"
						} dragBox no-cursor`}
						ref={ref}
						onContextMenu={(e) => {
							e.preventDefault();
							handleDeleteChar(data, index);
						}}
					>
						<Image
							priority
							src={`/character/${data[0]}.png`}
							alt={"character"}
							fill
							sizes="100px"
							className={`no-cursor`}
						/>
					</DraggableCharBox>
				</Draggable>
			))}
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
