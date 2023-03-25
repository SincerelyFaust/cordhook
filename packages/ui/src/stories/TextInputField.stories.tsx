import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextInputField } from "../components/TextInputField";
import React from "react";

export default {
  title: "Text Input Field",
  component: TextInputField,
} as ComponentMeta<typeof TextInputField>;

const Template: ComponentStory<typeof TextInputField> = args => (
  <TextInputField {...args} />
);

export const Primary = Template.bind({});
