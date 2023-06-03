import Image from "next/image";
import { useCharActions, useIsOpenChar } from "../../../stores/CharacterStore";
import { useIsOpenMap, useMapActions } from "../../../stores/MapStore";
import { AddButtonContainer } from "./SettingButton.styled";

export const SettingButton = () => {
	const isOpenMap = useIsOpenMap();
	const isOpenChar = useIsOpenChar();
	const { setIsOpenMap, setIsCloseMap } = useMapActions();
	const { setIsOpenChar, setIsCloseChar } = useCharActions();

	const handleMapChange = () => {
		if (isOpenMap) return setIsCloseMap();
		setIsOpenMap();
		setIsCloseChar();
		return;
	};
	const handleCharChange = () => {
		if (isOpenChar) return setIsCloseChar();
		setIsOpenChar();
		setIsCloseMap();
		return;
	};

	return (
		<AddButtonContainer>
			<Image
				src={"/icon/change_circle.svg"}
				alt={"change"}
				width={48}
				height={48}
				onClick={handleMapChange}
			/>
			<Image
				src={"/icon/add_circle.svg"}
				alt={"add"}
				width={48}
				height={48}
				onClick={handleCharChange}
			/>
		</AddButtonContainer>
	);
};
