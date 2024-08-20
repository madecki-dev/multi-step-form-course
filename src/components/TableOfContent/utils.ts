import { DefaultTheme } from "styled-components";

export type ListItemProps = {
  isActive?: boolean;
  isDone?: boolean;
  isChildren?: boolean;
};

export const getListItemStatusIndicator = ({
  isActive = false,
  isDone = false,
  isChildren = false,
}: ListItemProps): keyof DefaultTheme["colors"] => {
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

export const getListItemIndicatorTextColor = (
  isActive = false,
  isDone = false
): keyof DefaultTheme["colors"] => {
  if (isDone || isActive) return "white";
  return "black";
};
