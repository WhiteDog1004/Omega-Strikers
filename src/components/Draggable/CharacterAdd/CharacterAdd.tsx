import Image from "next/image";

export const CharacterAdd = () => {
	return (
		<Image
			priority
			src={"/character/Drek_ar.png"}
			alt={"Drek_ar"}
			fill
			sizes="100px"
			className={"no-cursor"}
		/>
	);
};
