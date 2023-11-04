import {
  Body1,
  MenuDivider,
  MenuGroup,
  MenuGroupHeader,
  MenuItem,
  MenuList,
  Persona,
  Subtitle2,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
} from "@fluentui/react-components";
import { Dismiss24Regular, Settings24Regular, Dismiss24Filled } from "@fluentui/react-icons";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderNavigation,
  DrawerOverlay,
} from "@fluentui/react-components/unstable";
import {
  WeatherMoon20Regular,
  WeatherSunny20Regular,
} from "@fluentui/react-icons/lib/fonts";
import { useCallback, useContext, useState } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ThemeContext } from "../../provider/ThemeProvider";
import { TranslationContext } from "../../provider/TranslationProvider";
import logo from "../../assets/timebee.svg";

const Drawer = ({ isOpen, setIsOpen }) => {
  const { I18N } = useContext(TranslationContext);
  const { changeTheme, theme } = useContext(ThemeContext);
  const [typeOfTheme, setTypeOfTheme] = useState(theme);
  const handleChangeTheme = useCallback(() => {
    setTypeOfTheme((type) => {
      changeTheme(!type);
      return !type;
    });
  }, [changeTheme]);
  return (
    <DrawerOverlay
      size="small"
      position="start"
      open={isOpen}
      onOpenChange={(_, { open }) => setIsOpen(open)}
    >
      <DrawerHeader className="headerDrawer">
        <DrawerHeaderNavigation className="flexEnd">
          <Subtitle2>TimeBee</Subtitle2>
          <Toolbar className="toolbarDrawer">
            <ToolbarGroup>
              <ToolbarButton
                appearance="subtle"
                icon={
                  typeOfTheme ? (
                    <WeatherSunny20Regular />
                  ) : (
                    <WeatherMoon20Regular />
                  )
                }
                onClick={handleChangeTheme}
              />
              <ToolbarButton
                aria-label="Settings"
                appearance="subtle"
                icon={<Settings24Regular />}
              />
              <ToolbarButton
                aria-label="Close panel"
                appearance="subtle"
                icon={<Dismiss24Filled />}
                onClick={() => setIsOpen(false)}
              />
            </ToolbarGroup>
          </Toolbar>
        </DrawerHeaderNavigation>
      </DrawerHeader>
      <DrawerBody
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0",
          margin: "0",
        }}
      >
        <Persona
          className="personaDrawer"
          avatar={{
            image: { src: logo },
          }}
          size="large"
          textPosition="after"
          name="Riccardo"
          presence={{ status: "available", size: "small" }}
          secondaryText="Available"
        />

        <MenuList>
          <MenuGroup>
            <MenuGroupHeader>{I18N.DRAWER.TOOLS}</MenuGroupHeader>
            {/** TODO: CREATE COMPONENT AND RELATIVE ROUTING */}
            <Link to="/about">
              <MenuItem
                className="menuItemDrawer"
                onClick={() => setIsOpen(false)}
              >
                <Body1>{I18N.DRAWER.TIMESHEET}</Body1>
              </MenuItem>
            </Link>
            <MenuItem className="menuItemDrawer">
              <Body1>{I18N.DRAWER.UPLOADDOCUMENTS}</Body1>
            </MenuItem>
          </MenuGroup>
          <MenuDivider className="dividerDrawer" />
          <MenuGroup>
            <MenuGroupHeader>{I18N.DRAWER.DOWNLOAD}</MenuGroupHeader>
            <MenuItem className="menuItemDrawer">
              <Body1>{I18N.DRAWER.PAYSLIP}</Body1>
            </MenuItem>
            <MenuItem className="menuItemDrawer">
              <Body1>{I18N.DRAWER.REIMBURSEMENT}</Body1>
            </MenuItem>
          </MenuGroup>
          <MenuDivider className="dividerDrawer" />
          <MenuGroup>
            <MenuGroupHeader>{I18N.DRAWER.HELP}</MenuGroupHeader>
            <MenuItem className="menuItemDrawer">
              <Body1>{I18N.DRAWER.TECHNICALSUPPORT}</Body1>
            </MenuItem>
            <MenuItem className="menuItemDrawer">
              <Body1>{I18N.DRAWER.MYTEAM}</Body1>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </DrawerBody>
    </DrawerOverlay>
  );
};

export default Drawer;

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
