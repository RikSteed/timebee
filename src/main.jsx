import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import TranslationProvider from "./provider/TranslationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </ThemeProvider>
);
