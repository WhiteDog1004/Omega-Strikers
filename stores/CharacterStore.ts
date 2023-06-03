import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CharState {
	charValue: string;
	isOpenChar: boolean;

	actions: {
		setCharValue: (char: string) => void;
		setIsOpenChar: () => void;
		setIsCloseChar: () => void;
	};
}

const useChartore = create<CharState>()(
	devtools((set) => ({
		charValue: "",
		isOpenChar: false,

		actions: {
			setCharValue: (text) => {
				set(() => ({ charValue: text }));
			},
			setIsOpenChar: () => {
				set({ isOpenChar: true });
			},
			setIsCloseChar: () => {
				set({ isOpenChar: false });
			},
		},
	}))
);

export const useCharValue = () => useChartore((state) => state.charValue);
export const useIsOpenChar = () => useChartore((state) => state.isOpenChar);
export const useCharActions = () => useChartore((state) => state.actions);
