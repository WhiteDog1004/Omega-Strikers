import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface FAQState {
	mapValue: string;
	isOpenMap: boolean;

	actions: {
		setMapValue: (map: string) => void;
		setIsOpenMap: () => void;
		setIsCloseMap: () => void;
	};
}

const useMaptore = create<FAQState>()(
	devtools((set) => ({
		mapValue: "AhtenCity",
		isOpenMap: false,

		actions: {
			setMapValue: (text) => {
				set(() => ({ mapValue: text }));
			},
			setIsOpenMap: () => {
				set({ isOpenMap: true });
			},
			setIsCloseMap: () => {
				set({ isOpenMap: false });
			},
		},
	}))
);

export const useMapValue = () => useMaptore((state) => state.mapValue);
export const useIsOpenMap = () => useMaptore((state) => state.isOpenMap);
export const useMapActions = () => useMaptore((state) => state.actions);
