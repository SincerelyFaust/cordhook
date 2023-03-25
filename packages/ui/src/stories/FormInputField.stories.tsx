import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormInputField } from "../components/FormInputField";
import React from "react";

export default {
  title: "Form Input Field",
  component: FormInputField,
} as ComponentMeta<typeof FormInputField>;

const Template: ComponentStory<typeof FormInputField> = args => (
  <FormInputField {...args} />
);

export const Primary = Template.bind({});
