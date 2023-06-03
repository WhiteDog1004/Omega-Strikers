import styled from "@emotion/styled";

export const OpenCharContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 30px;
	width: 300px;
	height: max-content;
	background-color: #00000099;
	border-radius: 10px;
`;
export const OpenCharBlock = styled.div`
	width: 100%;
	height: 400px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`;
export const OpenCharBox = styled.div`
	width: 100%;
	height: 60px;
	margin-top: 10px;
	background-color: #000;
`;
