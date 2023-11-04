import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext({
  theme: "dark",
  changeTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(sessionStorage.getItem("thm") === "true");
  const changeTheme = (theme) => {
    sessionStorage.setItem("thm", theme);
    setTheme(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.element,
};
