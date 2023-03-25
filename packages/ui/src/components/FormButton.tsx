import styled from "styled-components";

const Button = styled.input`
  padding: 15px;
  background-color: ${({ theme }) => theme.background.backgroundColorLight};
  color: ${({ theme }) => theme.text.textColorLight};
  font-weight: bold;
  border: none;
  border-radius: 10px;
  font-size: 13.5px;

  &:hover {
    background-color: ${({ theme }) =>
      theme.background.backgroundColorContrast};
  }
`;

interface FormButtonProps {
  disabled?: boolean;
  form: string;
  name: string;
  type: "button" | "reset" | "submit" | "checkbox";
  onClick?: () => void;
  value: string;
}

export const FormButton = ({
  disabled,
  form,
  name,
  type,
  onClick,
  value,
}: FormButtonProps) => {
  return (
    <Button
      disabled={disabled}
      form={form}
      name={name}
      type={type}
      value={value}
      onClick={onClick}
    />
  );
};
