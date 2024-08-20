import styled from "styled-components";

export default function Page({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>{pageTitle}</h1>
      <PageContent>{children}</PageContent>
    </div>
  );
}

const PageContent = styled.section`
  display: grid;
  gap: ${({ theme }) => theme.spacings[2]};
`;
