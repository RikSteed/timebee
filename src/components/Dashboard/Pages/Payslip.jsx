import { TranslationContext } from "../../../provider/TranslationProvider";
import { useContext } from "react";

const Payslip = () => {
  const { I18N } = useContext(TranslationContext);
  return <>Payslip</>;
};

export default Payslip;
