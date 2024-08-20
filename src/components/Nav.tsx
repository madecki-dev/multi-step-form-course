import styled from "styled-components";
import { Container } from "./Container";
import ArrowIcon from "../assets/ArrowIcon.svg";
import { VisuallyHidden } from "./VisuallyHidden";
import { useContext } from "react";
import { NavContext } from "../NavProvider";
import Badge from "./Badge";

export default function Nav() {
  const { title } = useContext(NavContext);

  return (
    <Wrapper>
      <Content>
        <ReturnButton onClick={() => history.back()}>
          <img src={ArrowIcon} alt="" />
          <VisuallyHidden>Return</VisuallyHidden>
        </ReturnButton>

        <Title>{title}</Title>

        <Badge text="In progress" />
      </Content>
    </Wrapper> 
  );
}

const Wrapper = styled.nav`
  padding-top: ${({ theme }) => theme.spacings[7]};
  padding-bottom: ${({ theme }) => theme.spacings[5]};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.stroke}`};
`;

const Content = styled(Container)`
  display: flex;
  align-items: center;
`;

const ReturnButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: ${({ theme: { spacings } }) => `${spacings[3]} ${spacings[4]}`};
  border: none;
  border-radius: ${({ theme }) => theme.spacings[4]};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-left: ${({ theme }) => theme.spacings[3]};
  margin-right: ${({ theme }) => theme.spacings[2]};
`;
