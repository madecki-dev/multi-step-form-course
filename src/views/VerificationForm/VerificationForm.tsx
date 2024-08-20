import { useContext, useEffect } from "react";

import styled from "styled-components";
import { NavContext } from "../../components/Nav/NavProvider";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container";

export default function VerificationForm() {
  const { setTitle } = useContext(NavContext);

  useEffect(() => {
    setTitle && setTitle("Account verification");
  });

  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: min-content 1fr;
  padding-top: ${({ theme }) => theme.spacings[7]};
`;
