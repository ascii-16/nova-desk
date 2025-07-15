"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export type ColorTheme = "default" | "red" | "rose" | "orange" | "green" | "blue" | "mono";

const ColorThemeContext = React.createContext<{
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}>({
  colorTheme: "default",
  setColorTheme: () => {},
});

export function useColorTheme() {
  return React.useContext(ColorThemeContext);
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [colorTheme, setColorThemeState] = React.useState<ColorTheme>("default");

  React.useEffect(() => {
    const stored = localStorage.getItem("color-theme") as ColorTheme;
    if (stored) {
      setColorThemeState(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("color-theme", theme);
  };

  return (
    <NextThemesProvider {...props}>
      <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
        {children}
      </ColorThemeContext.Provider>
    </NextThemesProvider>
  );
}
