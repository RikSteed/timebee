import {
    Body1Strong,
  Body2,
  Button,
  Persona,
  Subtitle2Stronger,
  Title1,
} from "@fluentui/react-components";
import { Grid24Regular } from "@fluentui/react-icons";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
import { TranslationContext } from "../../provider/TranslationProvider";
import logo from "../../assets/timebee.svg";

const DashboardBar = ({ handleOpenDrawer }) => {
  const { I18N } = useContext(TranslationContext);
  const setIsOpen = (t) => {
    handleOpenDrawer(t);
  };
  return (
    <div className="dashboardbar">
      <div className="dashboardbarItem">
      <Button
        appearance="transparent"
        onClick={() => setIsOpen(true)}
        icon={<Grid24Regular />}
      />
      &nbsp;
        <TypewriterComponent
          options={{
            strings: I18N.DASHBOARDBAR.PHRASES,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Persona
      style={{marginRight: "1rem"}}
          avatar={{
            image: { src: logo },
          }}
          textPosition="before"
          name="Riccardo"
          presence={{ status: "available", size: "small" }}
          secondaryText="Available"
        />
    </div>
  );
};

export default DashboardBar;
