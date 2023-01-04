import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ThemeSelect = styled.select`
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background.backgroundColorLight};
  color: ${({ theme }) => theme.text.textColorLight};
  font-size: large;
`;

const ThemeOption = styled.option``;

type ThemeTypes = "dark" | "light" | "system";

const ThemeButton = () => {
  const [localStorageTheme, setLocalStorageTheme] = useState<ThemeTypes>();

  const onThemeChange = (theme: ThemeTypes) => {
    setLocalStorageTheme(theme);
    localStorage.setItem("theme", theme);

    /* This dispatches a new storage event so we can update the theme, it is a bit
       over engineered, but it works. (we need this because the storage event
       only picks it up within the browser not in context) */
    window.dispatchEvent(new Event("storage"));
  };

  useEffect(() => {
    setLocalStorageTheme(
      (localStorage.getItem("theme") as ThemeTypes) ?? "system",
    );
  }, []);

  return (
    <>
      <ThemeSelect
        value={localStorageTheme}
        id="theme"
        onChange={e => {
          onThemeChange(e.target.value as ThemeTypes);
        }}
      >
        <ThemeOption value="system">💻 System</ThemeOption>
        <ThemeOption value="dark">🌚 Dark</ThemeOption>
        <ThemeOption value="light">🌝 Light</ThemeOption>
      </ThemeSelect>
    </>
  );
};

export default ThemeButton;
