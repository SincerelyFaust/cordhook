import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.text.textColorLight};
`;

const StyledInput = styled.textarea`
  padding: 20px;
  background-color: ${({ theme }) => theme.background.backgroundColorContrast};
  border: none;
  height: 300px;
  min-height: 50px;
  color: ${({ theme }) => theme.text.textColorLight};
  border-radius: 10px;
  font-size: larger;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px gray;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text.textColorDark};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Info = styled.p`
  color: ${({ theme }) => theme.text.textColorDark};
`;

interface TextInputFieldProps {
  title: string;
  placeholder: string;
  name: string;
  id: string;
  maxLength?: number;
  minLength?: number;
  required: boolean;
  trailing?: string;
  form?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextInputField = ({
  title,
  placeholder,
  name,
  id,
  maxLength,
  minLength,
  required,
  trailing,
  form,
  onChange,
}: TextInputFieldProps) => {
  return (
    <>
      <Container>
        <LabelContainer>
          <StyledLabel>{title}</StyledLabel>
          <Info>{trailing}</Info>
        </LabelContainer>
        <StyledInput
          name={name}
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          required={required}
          form={form}
          onChange={onChange}
        />
      </Container>
    </>
  );
};

export default TextInputField;
