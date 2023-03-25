import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import styled, { useTheme } from "styled-components/native";

const InputDiv = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

const StyledInput = styled.TextInput<{ isLongText: boolean }>`
  padding: 10px;
  width: 300px;
  height: ${({ isLongText }) => (isLongText ? "200px" : "50px")}
  border: 1px solid ${({ theme }) => theme.text.textColor};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.background.backgroundColorLight};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text.textColor};
`;

const InputName = styled.Text`
  color: ${({ theme }) => theme.text.textColor};
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

const InputTrailing = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

const InputMaxCharacterCount = styled.Text`
  color: ${({ theme }) => theme.text.textColor};
  text-align: center;
  font-size: 12px;
  margin-left: 10px;
`;

interface InputFieldProps {
  placeholder: string;
  onSubmitEditing: () => void;
  onChanged: (changedValue: string) => void;
  defaultValue: string;
  name: string;
  maxLength?: number;
  isLongText?: boolean;
  trailing?: boolean;
  component?: ReactNode;
  maxCharacterCount?: boolean;
  setMaxCharacterCount?: number;
}

const InputField = ({
  placeholder,
  onSubmitEditing,
  onChanged,
  defaultValue,
  name,
  maxLength,
  isLongText,
  trailing,
  component,
  maxCharacterCount,
  setMaxCharacterCount,
}: InputFieldProps) => {
  const [characterCount, setCharacterCount] = useState(0);
  const theme = useTheme();

  return (
    <InputDiv>
      {trailing ? (
        <InputTrailing>
          <InputName>{name}</InputName>
          {component}
        </InputTrailing>
      ) : maxCharacterCount ? (
        <InputTrailing>
          <InputName>{name}</InputName>
          <InputMaxCharacterCount>
            {characterCount} / {setMaxCharacterCount}
            {component}
          </InputMaxCharacterCount>
        </InputTrailing>
      ) : (
        <InputName>{name}</InputName>
      )}
      <StyledInput
        isLongText={isLongText}
        multiline={isLongText}
        placeholder={placeholder}
        onSubmitEditing={onSubmitEditing}
        onChangeText={newText => {
          onChanged(newText), setCharacterCount(newText.length);
        }}
        defaultValue={defaultValue}
        maxLength={maxLength}
        placeholderTextColor={theme.type === "dark" ? "#676767" : "#656565"}
      />
    </InputDiv>
  );
};

export default InputField;
