import Image from "next/image";
import { useIsOpenMap, useMapActions } from "../../../stores/MapStore";
import { AddButtonContainer } from "./SettingButton.styled";

export const SettingButton = () => {
	const isOpenMap = useIsOpenMap();
	const { setMapValue, setIsOpenMap, setIsCloseMap } = useMapActions();

	const handleMapChange = () => {
		if (isOpenMap) return setIsCloseMap();
		return setIsOpenMap();
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
			/>
		</AddButtonContainer>
	);
};
