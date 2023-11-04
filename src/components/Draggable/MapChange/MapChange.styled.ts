import styled from "@emotion/styled";

export const MapChangeContainer = styled.div`
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
export const MapChangeBlock = styled.div`
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
