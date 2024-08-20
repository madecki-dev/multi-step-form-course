import { Link } from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";

export const getListItemBackgroundColor = (
  isActive = false,
  isDone = false,
  isChildren = false
): keyof DefaultTheme["colors"] => {
  if (isDone) {
    return "success";
  } else if (isActive) {
    return "primary";
  } else if (isChildren) {
    return "placeholder";
  } else {
    return "white";
  }
};

export const getLinkColor = (
  isActive = false,
  isChildren = false
): keyof DefaultTheme["colors"] => {
  if (isActive) {
    return "primary";
  } else if (isChildren) {
    return "placeholder";
  } else {
    return "black";
  }
};

export const getListItemTextColor = (
  isActive = false,
  isDone = false
): keyof DefaultTheme["colors"] => {
  if (isDone || isActive) return "white";
  return "black";
};

export const TableOfContentWrapper = styled.nav`
  margin-right: 300px;
`;

export const ListVisualizer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33px;
  border-radius: 100px;
  padding: ${({ theme }) => theme.spacings[1]};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const ListItemWrapper = styled.div<{
  isChildren?: boolean;
  isDone?: boolean;
  isActive?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isChildren }) => (isChildren ? "10px" : "26px")};
  height: ${({ isChildren }) => (isChildren ? "10px" : "26px")};
  border-radius: 50%;
  background-color: ${({ theme, isActive, isDone, isChildren }) =>
    theme.colors[getListItemBackgroundColor(isActive, isDone, isChildren)]};
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

export const ListItem = styled.li<{ isChildren?: boolean }>`
  position: absolute;
  left: 64px;
  top: ${({ isChildren }) => (isChildren ? "-5px" : "2px")};
  width: 200px;
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
