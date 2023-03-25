import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormButton } from "../components/FormButton";
import React from "react";

export default {
  title: "Form Button",
  component: FormButton,
} as ComponentMeta<typeof FormButton>;

const Template: ComponentStory<typeof FormButton> = args => (
  <FormButton {...args} />
);

export const Primary = Template.bind({});
