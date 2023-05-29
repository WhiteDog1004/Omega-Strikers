import styled from "@emotion/styled";

export const AddButtonContainer = styled.div`
	position: absolute;
	right: 10px;
	bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: max-content;
	height: auto;
	border-radius: 10041004px;
	background-color: #ffffff;

	img {
		cursor: pointer;
		border-radius: 10041004px;

		&:hover {
			transform: rotate(-360deg);
			transition: transform 0.55s ease-in-out;
		}
	}
`;
