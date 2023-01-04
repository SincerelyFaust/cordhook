import { useState } from "react";
import styled from "styled-components";
import TextInputField from "./TextInputField";

const SectionTitle = styled.p`
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: bold;
  font-size: x-large;
`;

const ContentSection = () => {
  const [textAreaCount, setTextAreaCount] = useState(0);
  const calculateLength = e => {
    setTextAreaCount(e.target.value.length);
  };

  return (
    <>
      <SectionTitle>Content</SectionTitle>
      <TextInputField
        title={"Message"}
        placeholder={
          "Write an introduction message here with a simple explanation and instructions."
        }
        name={"message"}
        id={"message"}
        maxLength={2000}
        required={false}
        trailing={`${textAreaCount.toString()} / 2000`}
        form={"webhook_form"}
        onChange={calculateLength}
      />
    </>
  );
};

export default ContentSection;
