import React, { useEffect, useState } from "react";
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

const Trailing = styled.p`
  color: ${({ theme }) => theme.text.textColorDark};
`;

const initialState = {
  textAreaCount: 0,
};

interface TextInputFieldProps {
  title: string;
  placeholder: string;
  name: string;
  id: string;
  maxLength?: number;
  minLength?: number;
  required: boolean;
  maxCharacterCount?: number;
  form: string;
  onChanged?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextInputField = ({
  title,
  placeholder,
  name,
  id,
  maxLength,
  minLength,
  required,
  maxCharacterCount,
  form,
  onChanged,
}: TextInputFieldProps) => {
  const [textAreaCount, setTextAreaCount] = useState(
    initialState.textAreaCount,
  );
  const calculateLength = (e: any) => {
    setTextAreaCount(e.target.value.length);
  };

  useEffect(() => {
    document.addEventListener("reset", () => {
      setTextAreaCount(initialState.textAreaCount);
    });
  }, []);

  return (
    <>
      <Container>
        <LabelContainer>
          <StyledLabel>{title}</StyledLabel>
          {maxCharacterCount !== undefined ? (
            <Trailing>{`${textAreaCount} / ${maxCharacterCount}`}</Trailing>
          ) : null}
        </LabelContainer>
        <StyledInput
          name={name}
          id={id}
          placeholder={placeholder}
          maxLength={maxLength}
          minLength={minLength}
          required={required}
          form={form}
          onChange={onChanged !== undefined ? onChanged : calculateLength}
        />
      </Container>
    </>
  );
};
