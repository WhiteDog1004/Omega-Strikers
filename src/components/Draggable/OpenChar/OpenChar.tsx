import Image from "next/image";
import {
	useAddedData,
	useCharActions,
} from "../../../../stores/CharacterStore";
import { CharacterLists } from "./OpenChar.const";
import {
	CharacterNameText,
	OpenCharBlock,
	OpenCharBox,
	OpenCharContainer,
} from "./OpenChar.styled";

export const OpenChar = () => {
	const addedChar = useAddedData();
	const { setAddedData, setIsCloseChar } = useCharActions();
	const handleAddCharacter = (list: any) => () => {
		if (
			addedChar
				.map((data) => data.toString())
				.includes(`${list.name},${list.type}`)
		) {
			return alert("해당 팀의 같은 캐릭터를 추가할 수 없습니다.");
		}

		if (list.type === "team") {
			if (
				addedChar
					.map((data) => data[1])
					.filter((data) => data === "team").length === 3
			) {
				return alert("해당 팀의 캐릭터를 더이상 추가할 수 없습니다.");
			}
		}

		if (list.type === "enemy") {
			if (
				addedChar
					.map((data) => data[1])
					.filter((data) => data === "enemy").length === 3
			) {
				return alert("해당 팀의 캐릭터를 더이상 추가할 수 없습니다.");
			}
		}
		setAddedData([list.name, list.type]);
		setIsCloseChar();
	};

	return (
		<OpenCharContainer>
			<OpenCharBlock>
				{CharacterLists.map((list) => (
					<OpenCharBox
						key={list.id}
						className={list.type === "team" ? "" : "enemy"}
						onClick={handleAddCharacter(list)}
					>
						<Image
							src={`/character/${list.name}.png`}
							alt={"character"}
							fill
							sizes="300px"
						/>
						<CharacterNameText>{list.name}</CharacterNameText>
					</OpenCharBox>
				))}
			</OpenCharBlock>
		</OpenCharContainer>
	);
};
