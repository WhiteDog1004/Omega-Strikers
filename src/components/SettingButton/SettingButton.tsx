import Image from "next/image";
import { AddButtonContainer } from "./SettingButton.styled";

export const SettingButton = () => {
	return (
		<AddButtonContainer>
			<Image
				src={"/icon/change_circle.svg"}
				alt={"change"}
				width={48}
				height={48}
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
