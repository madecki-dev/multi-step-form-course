import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  getLinkColor,
  getListItemStatusIndicator,
  getListItemTextColor,
  ListItemProps,
} from "./utils";

export const TableOfContentWrapper = styled.nav`
  margin-right: 18.75rem;
`;

export const ListVisualizer = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2.06rem;
  border-radius: 6.25rem;
  padding: ${({ theme }) => theme.spacings[1]};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const ListItemWrapper = styled.div<ListItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isChildren }) => (isChildren ? "10px" : "26px")};
  height: ${({ isChildren }) => (isChildren ? "10px" : "26px")};
  border-radius: 50%;
  background-color: ${({ theme, isActive, isDone, isChildren }) =>
    theme.colors[getListItemStatusIndicator({ isDone, isActive, isChildren })]};
  position: relative;
  margin-top: ${({ theme, isChildren }) =>
    isChildren ? theme.spacings[3] : theme.spacings[5]};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, isActive, isDone }) =>
    theme.colors[getListItemTextColor(isActive, isDone)]};
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;

  &:first-of-type {
    margin-top: 0;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ListItem = styled.li<ListItemProps>`
  position: absolute;
  left: 4rem;
  top: ${({ isChildren }) => (isChildren ? "-5px" : "2px")};
  width: 12.5rem;
  list-style-type: none;
`;

export const ListLink = styled(Link)<{
  isActive?: boolean;
  isChildren?: boolean;
}>`
  color: ${({ theme, isActive, isChildren }) =>
    theme.colors[getLinkColor(isActive, isChildren)]};

  text-decoration: none;
`;
