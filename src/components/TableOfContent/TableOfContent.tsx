import { useLocation, useNavigate } from "react-router-dom";
import {
  ListItem,
  ListItemWrapper,
  ListLink,
  ListVisualizer,
  TableOfContentWrapper,
} from "./TableOfContent.styles";
import { TableOfContentContext } from "./TableOfContentContext";
import { useContext } from "react";
import CheckIcon from "../../assets/CheckIcon.svg";

export type TableOfContentItem = {
  id: string;
  title: string;
  path: string;
  isDone?: boolean;
  children?: Omit<TableOfContentItem, "children">[];
};

export function TableOfContent() {
  const { items } = useContext(TableOfContentContext);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <TableOfContentWrapper aria-label="Table of content">
      <ListVisualizer>
        {items.map((item, index) => (
          <>
            <ListItemWrapper
              isActive={item.path === location.pathname}
              isDone={item.isDone}
              onClick={() => navigate(item.path)}
            >
              {item.isDone ? index + 1 : <img src={CheckIcon} alt="Done" />}
              <ListItem key={item.path}>
                <ListLink
                  to={item.path}
                  isActive={item.path === location.pathname}
                >
                  {item.title}
                </ListLink>
              </ListItem>
            </ListItemWrapper>

            {item.children && (
              <>
                {item.children.map((child) => (
                  <ListItemWrapper
                    isChildren
                    isActive={child.path === location.pathname}
                    isDone={child.isDone}
                    onClick={() => navigate(child.path)}
                  >
                    <ListItem key={child.path} isChildren>
                      <ListLink
                        to={child.path}
                        isActive={child.path === location.pathname}
                        isChildren
                      >
                        {child.title}
                      </ListLink>
                    </ListItem>
                  </ListItemWrapper>
                ))}
              </>
            )}
          </>
        ))}
      </ListVisualizer>
    </TableOfContentWrapper>
  );
}
