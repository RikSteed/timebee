
import { TranslationContext } from "../../../provider/TranslationProvider";
import { useContext } from "react";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import { ThemeContext } from "../../../provider/ThemeProvider";
import { Calendar } from "@fluentui/react-calendar-compat"


const Timesheet = () => {
  const { I18N } = useContext(TranslationContext);
  const {theme} = useContext(ThemeContext)
  const MUI_THEME = createTheme({
    palette: {
      mode: theme ? "light" : "dark"
    }
  })
  return <div className="componentMainBody">
    <Calendar/>
    

        <ThemeProvider theme={MUI_THEME}>
        <Pagination count={10} shape="rounded" />
        </ThemeProvider>
    
  </div>;
};

export default Timesheet;
