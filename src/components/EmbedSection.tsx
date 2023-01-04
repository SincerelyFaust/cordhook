import { useState } from "react";
import styled from "styled-components";
import FormInputField from "./FormInputField";
import TextInputField from "./TextInputField";

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: bold;
  font-size: x-large;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

const ColorPicker = styled.input.attrs({ type: "color" })`
  width: 70px;
  height: 70px;
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  border-radius: 5px;

  ::-webkit-color-swatch {
    border: none;
    border-radius: 5px;
  }

  ::-moz-color-swatch {
    border: none;
    border-radius: 5px;
  }
`;

interface ColorPickerProps {
  colorPickerValue: string;
  setColorPickerValue: React.Dispatch<React.SetStateAction<string>>;
}

const EmbedSection = ({
  colorPickerValue,
  setColorPickerValue,
}: ColorPickerProps) => {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const calculateLength = e => {
    setTextAreaCount(e.target.value.length);
  };
  const changeColor = e => {
    setColorPickerValue(e.target.value);
  };

  return (
    <>
      <SectionTitle>Embed</SectionTitle>
      <FormInputField
        title={"Author"}
        subtitle={"Embed author's name"}
        name={"embed_author_name"}
        id={"embed_author_name"}
        type={"text"}
        trailing={`${textAreaCount.toString()} / 256`}
        maxLength={256}
        required={false}
        onChange={calculateLength}
      />
      <FormInputField
        title={"Author URL"}
        subtitle={"Author URL"}
        name={"embed_author_url"}
        id={"embed_author_url"}
        type={"url"}
        required={false}
      />
      <FormInputField
        title={"Author icon URL"}
        subtitle={"Embed author's icon"}
        name={"embed_author_icon_url"}
        id={"embed_author_icon_url"}
        type={"url"}
        required={false}
      />
      <FormInputField
        title={"Title"}
        subtitle={"Embed title"}
        name={"embed_title"}
        id={"embed_title"}
        type={"text"}
        trailing={`${textAreaCount.toString()} / 256`}
        maxLength={256}
        required={false}
        onChange={calculateLength}
      />
      <FormInputField
        title={"Embed URL"}
        subtitle={"Embed URL"}
        name={"embed_url"}
        id={"embed_url"}
        type={"url"}
        required={false}
      />
      <TextInputField
        title={"Description"}
        placeholder={
          "Write an introduction message here with a simple explanation and instructions."
        }
        name={"embed_description"}
        id={"embed_description"}
        maxLength={4096}
        required={false}
        trailing={`${textAreaCount.toString()} / 4096`}
        form={"webhook_form"}
        onChange={calculateLength}
      />
      <ColorPickerContainer>
        <FormInputField
          title={"Embed color"}
          subtitle={"Color of the embed"}
          placeholder={"#rrggbb"}
          id={"embed_color"}
          name={"embed_color"}
          type={"text"}
          maxLength={7}
          pattern={"#.*"}
          required={false}
          value={colorPickerValue}
          onChange={changeColor}
        />
        <ColorPicker
          id={"embed_color"}
          name={"embed_color"}
          required={false}
          value={colorPickerValue}
          onChange={changeColor}
        />
      </ColorPickerContainer>
      <FormInputField
        title={"Embed thumbnail"}
        subtitle={"Embed thumbnail URL"}
        name={"embed_thumbnail"}
        id={"embed_thumbnail"}
        type={"url"}
        required={false}
      />
      <FormInputField
        title={"Embed image"}
        subtitle={"Embed image URL"}
        name={"embed_image"}
        id={"embed_image"}
        type={"url"}
        required={false}
      />
      <FormInputField
        title={"Field name"}
        subtitle={"Field name"}
        name={"field_name"}
        id={"field_name"}
        type={"text"}
        trailing={`${textAreaCount.toString()} / 256`}
        maxLength={256}
        required={false}
        onChange={calculateLength}
      />
      <TextInputField
        title={"Field value"}
        placeholder={
          "Write an introduction message here with a simple explanation and instructions."
        }
        name={"field_value"}
        id={"field_value"}
        maxLength={1024}
        required={false}
        trailing={`${textAreaCount.toString()} / 1024`}
        form={"webhook_form"}
        onChange={calculateLength}
      />
      <FormInputField
        title={"Inline"}
        subtitle={"Whether the field should be inline"}
        name={"field_inline"}
        id={"field_inline"}
        type={"checkbox"}
        required={false}
      />
      <TextInputField
        title={"Footer text"}
        placeholder={
          "Write an introduction message here with a simple explanation and instructions."
        }
        name={"footer_text"}
        id={"footer_text"}
        maxLength={2048}
        required={false}
        trailing={`${textAreaCount.toString()} / 2048`}
        form={"webhook_form"}
        onChange={calculateLength}
      />
      <FormInputField
        title={"Footer icon"}
        subtitle={"Footer icon URL"}
        name={"footer_icon"}
        id={"footer_icon"}
        type={"url"}
        required={false}
      />
      <FormInputField
        title={"Timestamp"}
        subtitle={"Time when the embed was sent"}
        name={"timestamp"}
        id={"timestamp"}
        type={"datetime-local"}
        required={false}
      />
    </>
  );
};

export default EmbedSection;
