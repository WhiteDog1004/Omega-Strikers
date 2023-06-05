import styled from "@emotion/styled";
import Image from "next/image";

export const DraggableContainer = styled.div`
	position: relative;
	min-width: 1024px;
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
	height: auto;

	img {
		width: 100%;
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
export const SaveImageBox = styled.div`
	position: absolute;
	bottom: 10px;
	left: 10px;
	background-color: #ffffff;
	border: 3px solid #000000;
	border-radius: 10041004px;
	cursor: pointer;

	&:hover {
		background-color: skyblue;
		transition: background-color 0.35s ease-in-out;
	}
`;
export const CreateTextBox = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	color: #ffffff;
	z-index: -1;
`;
export const CreateText = styled.span``;
