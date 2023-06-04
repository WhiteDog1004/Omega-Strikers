import styled from "@emotion/styled";
import Image from "next/image";

export const DraggableContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 1024px;
	height: max-content;
	margin: 0 auto;
`;
export const DraggableCharBox = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: black;
	border: 4px solid transparent;
	border-radius: 10041004px;
	margin: auto;
	cursor: move;
	user-select: none;
	overflow: hidden;
	&.team {
		border: 4px solid blue;
	}
	&.enemy {
		border: 4px solid red;
	}

	&.none {
		display: none;
	}

	img {
		width: 50px;
		height: 50px;
		pointer-events: none;
		object-fit: cover;
	}
`;
export const DraggableMapBox = styled.div`
	width: 100%;
	height: 100%;

	img {
		width: 100%;
		height: 100%;
		pointer-events: none;
		object-fit: cover;
	}
`;
export const DragBallBox = styled.div`
	position: absolute;
	cursor: move;
	user-select: none;
	margin: auto;
	transform: translate(475px, 245px);

	& img {
		pointer-events: none;
	}
`;
export const DragBall = styled(Image)``;
