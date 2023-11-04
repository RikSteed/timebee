import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Navbar from "./components/Navbar/Navbar";
import {
  FluentProvider,
  createDarkTheme,
  createLightTheme,
} from "@fluentui/react-components";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./provider/ThemeProvider";

const myNewTheme = {
  10: "#02010E",
  20: "#00114A",
  30: "#001975",
  40: "#001BA0",
  50: "#0013D6",
  60: "#3E0AF0",
  70: "#6705FF",
  80: "#881AFF",
  90: "#A32DFF",
  100: "#BB40FF",
  110: "#CF53FF",
  120: "#E166FF",
  130: "#F07AFF",
  140: "#FC8FFF",
  150: "#FFAAF9",
  160: "#FFC3F5",
};

const darkTheme = {
  ...createDarkTheme(myNewTheme),
};
const lightTheme = {
  ...createLightTheme(myNewTheme),
};

darkTheme.colorBrandForeground1 = myNewTheme[110];
darkTheme.colorBrandForeground2 = myNewTheme[120];
lightTheme.colorBrandForeground1 = myNewTheme[110];
lightTheme.colorBrandForeground2 = myNewTheme[120];

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <FluentProvider
      style={{ height: "100%" }}
      theme={theme ? lightTheme : darkTheme}
    >
      <div className="main">
        <RouterProvider router={router} />
        <Navbar />
      </div>
    </FluentProvider>
  );
};

export default App;
