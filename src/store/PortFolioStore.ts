import { create } from "zustand";

interface IStates {
  languageSelected: "en" | "es";
}

interface IActions {
  setLanguageSelected: (lang: "en" | "es") => void;
}

export const usePortfolioStore = create<IStates & IActions>((set) => ({
  languageSelected: "es",
  setLanguageSelected: (lang: "en" | "es") => set({ languageSelected: lang }),
}));
