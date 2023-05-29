import styled from "@emotion/styled";

export const DraggableContainer = styled.div`
	width: 100%;
	height: max-content;
`;
export const DraggableCharBox = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: black;
	border: 3px solid red;
	border-radius: 10041004px;
	margin: auto;
	cursor: move;
	user-select: none;
	overflow: hidden;

	img {
		width: 100px;
		height: 100px;
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
