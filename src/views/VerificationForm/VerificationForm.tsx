import { useContext, useEffect } from "react";
import { NavContext } from "../../NavProvider";

import styled from "styled-components";

export default function VerificationForm() {
  const { setTitle } = useContext(NavContext);

  useEffect(() => {
    setTitle && setTitle("Account verification");
  });

  return <Wrapper></Wrapper>;
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: min-content 1fr;
  padding-top: ${({ theme }) => theme.spacings[7]};
`;
