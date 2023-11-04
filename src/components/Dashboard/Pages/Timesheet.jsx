import { Body1Strong, Card, CardHeader, CardPreview, Checkbox, Title3 } from "@fluentui/react-components";
import { TranslationContext } from "../../../provider/TranslationProvider";
import { useContext } from "react";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import { ThemeContext } from "../../../provider/ThemeProvider";



const Timesheet = () => {
  const { I18N } = useContext(TranslationContext);
  const {theme} = useContext(ThemeContext)
  const MUI_THEME = createTheme({
    palette: {
      mode: theme ? "light" : "dark"
    }
  })
  return <div className="componentMainBody">
    <Card style={{width: "180px", maxHeight: "80px", margin: "1rem"}} floatingAction={
            <Checkbox  />
          }>
      <CardHeader header={
        <Title3>31 Gennaio</Title3>} description={<Body1Strong>lunedì</Body1Strong>}/>
    </Card>

        <ThemeProvider theme={MUI_THEME}>
        <Pagination count={10} shape="rounded" />
        </ThemeProvider>
    
  </div>;
};

export default Timesheet;
