import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  type,
  status,
  icon,
  swapIcon,
  editText,
  ...props
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${type}`,
        mode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["Default", "Small", "X-Small"]),
  type: PropTypes.oneOf(["Default", "Neutral", "Reverse"]),
  status: PropTypes.oneOf(["Default", "Hover", "Disabled"]),
  icon: PropTypes.oneOf(["No", "Yes"]),
  swapIcon: PropTypes.oneOf(["True", "False"]),
  editText: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  // size: "Default",
  type: undefined,
  status: undefined,
  swapIcon: undefined,
  onClick: undefined,
};
