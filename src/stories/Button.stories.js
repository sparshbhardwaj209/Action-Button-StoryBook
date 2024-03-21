import { fn } from "@storybook/test";
import { Button } from "./Button";

export default {
  title: "Example/ActionButton",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: {
        type: "inline-radio",
        options: ["Default", "Small", "X-Small"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ['DefaultT', 'NeutralT', 'ReverseT'],
      },
    },
    status: {
      control: {
        type: "select",
        options: ['DefaultS', 'HoverS', 'DisabledS'],
      },
    },
    icon: {
      control: {
        type: "inline-radio",
        options: ['No', 'Yes'],
      },
    },
    swapIcon: {
      control: {
        type: "inline-radio",
        options: ['No', 'Yes'],
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

export const Primary = {
  args: {
    primary: true,
    label: "Button",
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
