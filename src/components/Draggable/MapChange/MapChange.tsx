import Image from "next/image";
import { useMapActions } from "../../../../stores/MapStore";
import { mapList } from "./MapChange.const";
import {
	MapBackground,
	MapBox,
	MapChangeContainer,
	MapName,
} from "./MapChange.styled";

export const MapChange = () => {
	const { setMapValue } = useMapActions();

	const handleChangeMap = (name: string) => () => {
		setMapValue(name);
	};
	return (
		<MapChangeContainer>
			{mapList.map((map) => (
				<MapBox key={map.name} onClick={handleChangeMap(map.name)}>
					<MapName>{map.name}</MapName>
					<MapBackground>
						<Image
							src={`/map/NoText_${map.name}.png`}
							alt={"maps"}
							fill
						/>
					</MapBackground>
				</MapBox>
			))}
		</MapChangeContainer>
	);
};
