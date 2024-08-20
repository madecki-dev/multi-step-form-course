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
            <TableOfContentItem key={item.id} item={item} index={index} />
            {item.children && (
              <>
                {item.children.map((child) => (
                  <TableOfContentItem key={child.id} item={child} isChildren />
                ))}
              </>
            )}
          </>
        ))}
      </ListVisualizer>
    </TableOfContentWrapper>
  );
}

function TableOfContentItem({
  item,
  index = 0,
  isChildren = false,
}: {
  item: TableOfContentItem;
  index?: number;
  isChildren?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <ListItemWrapper
      isChildren={isChildren}
      isActive={item.path === location.pathname}
      isDone={item.isDone}
      onClick={() => navigate(item.path)}
    >
      {!isChildren && (
        <>{item.isDone ? <img src={CheckIcon} alt="Done" /> : index + 1}</>
      )}

      <ListItem key={item.path} isChildren={isChildren}>
        <ListLink
          to={item.path}
          isActive={item.path === location.pathname}
          isChildren={isChildren}
        >
          {item.title}
        </ListLink>
      </ListItem>
    </ListItemWrapper>
  );
}
