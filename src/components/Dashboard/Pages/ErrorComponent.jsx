import { Subtitle2Stronger, Title1 } from "@fluentui/react-components";

import PropTypes from "prop-types";

const ErrorComponent = ({ code, message }) => {
  return (
    <div className="component">
      <Title1>{code}</Title1>
      <Subtitle2Stronger>{message}</Subtitle2Stronger>
    </div>
  );
};

export default ErrorComponent;

ErrorComponent.propTypes = {
  code: PropTypes.string,
};
