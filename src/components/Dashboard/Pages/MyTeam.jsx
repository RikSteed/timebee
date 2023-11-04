import { TranslationContext } from "../../../provider/TranslationProvider";
import { useContext } from "react";

const MyTeam = () => {
  const { I18N } = useContext(TranslationContext);
  return <>MyTeam</>;
};

export default MyTeam;
