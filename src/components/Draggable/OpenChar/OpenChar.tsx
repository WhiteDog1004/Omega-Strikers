import { CharacterLists } from "./OpenChar.const";
import {
	OpenCharBlock,
	OpenCharBox,
	OpenCharContainer,
} from "./OpenChar.styled";

export const OpenChar = () => {
	return (
		<OpenCharContainer>
			<OpenCharBlock>
				{CharacterLists.map((list) => (
					<OpenCharBox key={list.name}></OpenCharBox>
				))}
			</OpenCharBlock>
		</OpenCharContainer>
	);
};
