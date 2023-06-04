import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface CharState {
	charValue: string;
	isOpenChar: boolean;
	addedData: string[];

	actions: {
		setCharValue: (char: string) => void;
		setIsOpenChar: () => void;
		setIsCloseChar: () => void;
		setAddedData: (name: string[]) => void;
	};
}

const useChartore = create<CharState>()(
	devtools((set) => ({
		charValue: "",
		isOpenChar: false,
		addedData: [],

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
			setAddedData: (name) => {
				set((state) => ({
					...state,
					addedData: [...state.addedData, name] as string[],
				}));
			},
		},
	}))
);

export const useCharValue = () => useChartore((state) => state.charValue);
export const useIsOpenChar = () => useChartore((state) => state.isOpenChar);
export const useAddedData = () => useChartore((state) => state.addedData);
export const useCharActions = () => useChartore((state) => state.actions);
