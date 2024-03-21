import React from "react";
import PropTypes from "prop-types";
import { WifiHigh, ShoppingCart, PhoneCall, BellRinging } from "phosphor-react"; // Import the Icon component from phosphor-react

import "./button.css";

export const Button = ({
  primary,
  backgroundColor,
  // isDisabled,
  textColor,
  size,
  label,
  type,
  status,
  icon,
  swapIcon,
  editText,
  ...props
}) => {
  // const mode = primary
  //   ? "storybook-button--primary"
  //   : "storybook-button--secondary";

  // const disabled = isDisabled ? 'disabled' : '';

  let IconComponent;

  // Determine which icon component to use based on the value of swapIcon
  switch (swapIcon) {
    case "WifiHigh":
      IconComponent = WifiHigh;
      break;
    case "ShoppingCart":
      IconComponent = ShoppingCart;
      break;
    case "PhoneCall":
      IconComponent = PhoneCall;
      break;
    case "BellRinging":
      IconComponent = BellRinging;
      break;
    default:
      IconComponent = null;
  }

  return (
    <button
      type="button"
      className={[
        "button",
        `${size}`,
        `${type}`,
        // `storybook-button--${disabled}`,
        `bg--${backgroundColor}`,
        `${status}`,
        `text-${textColor}`,
        // mode,
      ].join(" ")}
      // style={backgroundColor && { backgroundColor }}
      // disabled={isDisabled}
      {...props}
    >
      {/* {icon && (
        <span className="icon-start">
          <WifiHigh size={32} />
        </span>
      )} */}

      {icon && (
        <span className="icon-start">
          <IconComponent size={32} />
        </span>
      )}
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["Default", "Small", "X-Small"]),
  type: PropTypes.oneOf(["DefaultT", "NeutralT", "ReverseT"]),
  status: PropTypes.oneOf(["DefaultS", "HoverS", "DisabledS"]),
  // isDisabled: PropTypes.bool,
  // icon: PropTypes.oneOf(["No", "Yes"]),
  swapIcon: PropTypes.oneOf([
    "ShoppingCart",
    "WifiHigh",
    "PhoneCall",
    "BellRinging",
  ]),
  editText: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  // isDisabled: false,
  backgroundColor: "transparent",
  // textColor: '#47b647',
  primary: false,
  size: "Default",
  // type: "DefaultT",
  // status: "DefaultS",
  icon: false,
  swapIcon: undefined,
  onClick: undefined,
};
