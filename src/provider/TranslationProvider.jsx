import { createContext, useState } from "react";
import PropTypes from "prop-types";
import en from "../assets/i18n/en.json";
import it from "../assets/i18n/it.json";
import fr from "../assets/i18n/fr.json";
import jp from "../assets/i18n/jp.json";

const languages = {
  en,
  it,
  fr,
  jp,
};

export const TranslationContext = createContext({
  I18N: en,
  changeLanguage: () => {},
});

const TranslationProvider = ({ children }) => {
  const [I18N, setI18N] = useState(
    languages[sessionStorage.getItem("language")] || en
  );

  const changeLanguage = (language) => {
    const selectedLanguage = languages[language];
    sessionStorage.setItem("language", language);
    setI18N(selectedLanguage);
  };

  return (
    <TranslationContext.Provider value={{ I18N, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;

TranslationProvider.propTypes = {
  children: PropTypes.element,
};
