import React, {
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";

const StyledTitleLabel = styled.label`
  color: ${({ theme }) => theme.text.textColorLight};
`;

const StyledSubtitleLabel = styled.label`
  color: ${({ theme }) => theme.text.textColorDark};
  font-size: medium;
`;

const StyledInput = styled.input`
  padding: 20px;
  background-color: ${({ theme }) => theme.background.backgroundColorContrast};
  border: none;
  height: 50px;
  color: ${({ theme }) => theme.text.textColorLight};
  border-radius: 10px;
  font-size: larger;

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
  flex: 1;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TrailingContainer = styled.div`
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

interface FormInputFieldProps {
  title: string;
  subtitle: string;
  value?: string | number;
  placeholder?: string;
  name: string;
  id: string;
  type: HTMLInputTypeAttribute;
  pattern?: string;
  maxLength?: number;
  minLength?: number;
  required: boolean;
  maxCharacterCount?: number;
  component?: ReactNode;
  form: string;
  onChanged?: React.ChangeEventHandler<HTMLInputElement>;
}

export const FormInputField = ({
  title,
  subtitle,
  value,
  placeholder,
  name,
  id,
  type,
  pattern,
  maxLength,
  minLength,
  required,
  maxCharacterCount,
  component,
  form,
  onChanged,
}: FormInputFieldProps) => {
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
          <TrailingContainer>
            <StyledTitleLabel>{title}</StyledTitleLabel>
            {maxCharacterCount !== undefined ? (
              <Trailing>{`${textAreaCount} / ${maxCharacterCount}`}</Trailing>
            ) : null}
            {component}
          </TrailingContainer>
          <StyledSubtitleLabel>{subtitle}</StyledSubtitleLabel>
        </LabelContainer>
        <StyledInput
          name={name}
          id={id}
          form={form}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          maxLength={maxLength}
          minLength={minLength}
          required={required}
          value={value}
          onChange={onChanged !== undefined ? onChanged : calculateLength}
        />
      </Container>
    </>
  );
};
