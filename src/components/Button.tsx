import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  return <ButtonStyled {...props} />;
}

const ButtonStyled = styled.button<{
  disabled?: ButtonProps["disabled"];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacings[1]};
  padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[3]}`};
  border-radius: ${({ theme }) => theme.spacings[2]};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.tertiary : theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  @media (min-width: 1024px) {
    width: 410px;
  }
`;
