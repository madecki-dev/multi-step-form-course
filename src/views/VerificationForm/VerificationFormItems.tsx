import styled from "styled-components";

export const AccountVerificationForm = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacings[5]};
`;

export const FormSectionHeading = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacings[3]};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
`;

export const Fieldset = styled.fieldset`
  display: grid;
  gap: ${({ theme }) => theme.spacings[2]};
`;
