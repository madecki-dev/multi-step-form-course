import React, { forwardRef, Fragment } from "react";
import styled from "styled-components";
import { VisuallyHidden } from "./VisuallyHidden";

type InputProps = {
  label: string;
  showLabel?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, showLabel, ...rest }, ref) => {
    const LabelWrapper = showLabel ? Fragment : VisuallyHidden;

    const id = rest.id || label.toLowerCase().replace(" ", "-");

    return (
      <>
        <LabelWrapper>
          <label htmlFor={id}>{label}</label>
        </LabelWrapper>
        <InputElement ref={ref} {...rest} id={id} />
      </>
    );
  }
);

export default Input;

const InputElement = styled.input`
  padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[3]}`};
  border-radius: ${({ theme }) => theme.spacings[2]};
  border: 1px solid ${({ theme }) => theme.colors.stroke};
  width: 100%;

  &:placeholder-shown {
    color: ${(props) => props.theme.colors.placeholder};
  }

  @media (min-width: 1024px) {
    width: 410px;
  }
`;
