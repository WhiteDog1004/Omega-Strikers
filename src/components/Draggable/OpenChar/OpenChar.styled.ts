import styled from "@emotion/styled";

export const OpenCharContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 30px;
	width: 300px;
	height: max-content;
	background-color: #111111;
	border-radius: 10px;
`;
export const OpenCharBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	width: 100%;
	height: 400px;
	overflow-y: auto;
	justify-content: center;
	align-items: center;

	&::-webkit-scrollbar {
		display: none;
	}
`;
export const OpenCharBox = styled.div`
	position: relative;
	width: 45%;
	height: 60px;
	margin-top: 10px;
	background-color: #000;
	border: 4px solid blue;
	cursor: pointer;
	opacity: 0.3;

	&:hover {
		opacity: 1;
		transition: opacity 0.3s;
	}

	&.enemy {
		border: 4px solid red;
	}

	& img {
		object-fit: cover;
		object-position: center;
	}
`;
export const CharacterNameText = styled.span`
	position: absolute;
	right: 10px;
	bottom: 5px;
	font-size: 16px;
	color: #ffffff;
`;
