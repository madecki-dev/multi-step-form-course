import styled from "styled-components";

export default function Badge({ text }: { text: string }) {
  return <BadgeWrapper>{text}</BadgeWrapper>;
}

const BadgeWrapper = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme }) => `${theme.spacings[1]} ${theme.spacings[2]}`};
  border-radius: ${({ theme }) => theme.spacings[1]};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;