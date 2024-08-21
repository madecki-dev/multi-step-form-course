import { useContext, useEffect } from "react";

import styled from "styled-components";
import { NavContext } from "../../components/Nav/NavProvider";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container";
import {
  TableOfContent,
  TableOfContentItem,
} from "../../components/TableOfContent/TableOfContent";
import { TableOfContentProvider } from "../../components/TableOfContent/TableOfContentContext";

const tableOfContents: TableOfContentItem[] = [
  {
    id: "businessAddress",
    title: "Business structure",
    path: "/business-structure",
    isDone: true,
    children: [
      {
        id: "2",
        title: "Business representative",
        path: "/business-structure/representative",
      },
      {
        id: "3",
        title: "Business details",
        path: "/business-structure/details",
      },
    ],
  },
  {
    id: "4",
    title: "Bank details",
    path: "/bank-details",
  },
  {
    id: "5",
    title: "2 step authentication",
    path: "/2-step-authentication",
  },
  {
    id: "6",
    title: "Overview",
    path: "/overview",
  },
];

export default function VerificationForm() {
  const { setTitle } = useContext(NavContext);

  useEffect(() => {
    setTitle && setTitle("Account verification");
  });

  return (
    <TableOfContentProvider items={tableOfContents}>
      <Container>
        <Wrapper>
          <TableOfContent />
          <Outlet />
        </Wrapper>
      </Container>
    </TableOfContentProvider>
  );
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: min-content 1fr;
  padding-top: ${({ theme }) => theme.spacings[7]};
`;
