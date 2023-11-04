import {
  Button,
  Menu,
  MenuItemRadio,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";
import { TranslateAuto24Regular } from "@fluentui/react-icons";
import listLanguages from "../../assets/languages.json";
import { useContext, useEffect, useState } from "react";
import { TranslationContext } from "../../provider/TranslationProvider";
import "./navbar.css";

const Navbar = () => {
  const { changeLanguage } = useContext(TranslationContext);
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: sessionStorage.getItem("language") || "en",
  });
  useEffect(() => {
    console.log(selectedLanguage);
  }, [selectedLanguage]);
  const onLanguageChange = (e, { name, checkedItems }) => {
    changeLanguage(checkedItems[0]);
    setSelectedLanguage({ [name]: checkedItems[0] });
  };

  return (
    <div className="navbar">
      <div className="navbarMargin">
        <Menu
          checkedValues={selectedLanguage}
          onCheckedValueChange={onLanguageChange}
        >
          <MenuTrigger disableButtonEnhancement>
            <Button icon={<TranslateAuto24Regular />} />
          </MenuTrigger>
          {listLanguages && (
            <MenuPopover>
              <MenuList>
                {listLanguages.map((language) => (
                  <MenuItemRadio
                    as="span"
                    name="language"
                    value={language.id}
                    key={language.name}
                  >
                    {language.name}
                  </MenuItemRadio>
                ))}
              </MenuList>
            </MenuPopover>
          )}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
