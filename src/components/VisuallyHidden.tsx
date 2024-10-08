import styled from "styled-components";

export const VisuallyHidden = styled.div`
  clip: rect(0 0 0 0);
  clip-path: inset(50%) !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;
