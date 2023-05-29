import Image from "next/image";
import { useRef } from "react";
import Draggable from "react-draggable";
import {
	DraggableCharBox,
	DraggableContainer,
	DraggableMapBox,
} from "./DraggableDatas.styled";

export const DraggableDatas = () => {
	const ref = useRef(null);
	return (
		<DraggableContainer>
			<Draggable
				onDrag={() => {}}
				handle=".dragBox"
				bounds=".container"
				nodeRef={ref}
			>
				<DraggableCharBox className="dragBox no-cursor" ref={ref}>
					<Image
						priority
						src={"/character/Drek_ar.png"}
						alt={"Drek_ar"}
						fill
						sizes="100px"
						className={"no-cursor"}
					/>
				</DraggableCharBox>
			</Draggable>
			<DraggableMapBox className="container">
				<Image
					priority
					src={"/map/NoText_AhtenCity.png"}
					alt={"map"}
					width={1920}
					height={1080}
				/>
			</DraggableMapBox>
		</DraggableContainer>
	);
};
