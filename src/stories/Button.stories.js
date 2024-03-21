import { fn } from "@storybook/test";
import { Button } from "./Button";
import * as PhosphorIcons from 'phosphor-react';


export default {
  title: "Example/ActionButton",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
    size: {
      control: {
        type: "inline-radio",
        options: ["Default", "Small", "X-Small"],
      },
    },
    type: {
      control: {
        type: "inline-radio",
        options: ["Default", "Neutral", "Reverse"],
      },
    },
    status: {
      control: {
        type: "inline-radio",
        options: ["DefaultS", "HoverS", "DisabledS"],
      },
    },
    // icon: {
    //   control: {
    //     type: "inline-radio",
    //     options: ["No", "Yes"],
    //   },
    // },
    // swapIcon: {
    //   control: {
    //     type: "selectIcon",
    //     options: ["ShoppingCart", "WifiHigh", "PhoneCall", "BellRinging"],
    //   },
    // },
    swapIcon: {
      control: {
        type: 'select', // Custom control type
        options: Object.keys(PhosphorIcons), // List of icon names
      },
    },
    editText: {
      control: {
        type: "text",
      },
    },
  },
  args: { onClick: fn() },
};

// const Template = (args) => <Button {...args} />;

// export const defaultButton = Template.bind({});
// defaultButton.args = {
//   label: "Button",
//   size: "Default",
// };

export const Primary = {
  args: {
    primary: true,
    label: "Button",
    icon: false, 
    // size: "Default",
    // type: "DefaultT",
    // icon: "No",
  },
};

export const Secondary = {
  args: {
    label: "Button",
    size: "Default",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
