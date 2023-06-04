import { toPng } from "html-to-image";
import Image from "next/image";
import { useRouter } from "next/router";
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
	SaveImageBox,
} from "./DraggableDatas.styled";
import { MapChange } from "./MapChange";
import { OpenChar } from "./OpenChar";

export const DraggableDatas = () => {
	const router = useRouter();
	const ref = useRef(null);
	const addedChar = useAddedData();
	const mapValue = useMapValue();
	const isOpenMap = useIsOpenMap();
	const isOpenChar = useIsOpenChar();
	const { setAddedData } = useCharActions();

	const handleDeleteChar = (data: any, index: number) => {
		setAddedData(addedChar.splice(index, 1));
	};

	//이미지 저장
	const handleCapture = () => {
		if (!router.isReady) return;
		const canvasElement = document.getElementById("canvas");
		if (canvasElement) {
			toPng(canvasElement).then((canvas) => {
				handleSaveAs(canvas, "omega-strikers.png");
			});
		}
	};
	const handleSaveAs = (url: string, filename: string) => {
		const link = document.createElement("a");
		document.body.appendChild(link);
		link.href = url;
		link.download = filename;
		link.click();
		document.body.removeChild(link);
	};

	return (
		<DraggableContainer id="canvas">
			<Draggable
				handle=".dragBox"
				bounds=".container"
				nodeRef={ref}
				defaultPosition={{ x: 478, y: 292 }}
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
					key={`${data[0]}.${data[1]}${index}`}
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
							src={`/character/${data[0]}.png`}
							alt={"character"}
							width={50}
							height={50}
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
					width={1024}
					height={600}
				/>
			</DraggableMapBox>
			<SettingButton />
			{isOpenMap && <MapChange />}
			{isOpenChar && <OpenChar />}
			<SaveImageBox onClick={handleCapture}>
				<Image
					src={"/download.svg"}
					alt={"save"}
					width={48}
					height={48}
				/>
			</SaveImageBox>
		</DraggableContainer>
	);
};
