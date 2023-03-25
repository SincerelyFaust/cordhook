import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeButton } from "../components/ThemeButton";
import React from "react";

export default {
  title: "Theme Button",
  component: ThemeButton,
} as ComponentMeta<typeof ThemeButton>;

const Template: ComponentStory<typeof ThemeButton> = () => <ThemeButton />;

export const Primary = Template.bind({});
