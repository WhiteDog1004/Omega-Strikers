import styled from "@emotion/styled";

export const MapChangeContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	padding: 30px;
	width: 300px;
	height: max-content;
	background-color: #111111;
	border-radius: 10px;
`;
export const MapBox = styled.div`
	position: relative;
	display: flex;
	width: 140px;
	height: 80px;
	border-radius: 10px;
	cursor: pointer;
	opacity: 0.3;

	&:hover {
		opacity: 1;
		transition: opacity 0.3s;
	}
`;
export const MapName = styled.span`
	position: absolute;
	right: 10px;
	bottom: 10px;
	font-size: 16px;
	color: #fff;
	z-index: 1;
`;
export const MapBackground = styled.div``;
