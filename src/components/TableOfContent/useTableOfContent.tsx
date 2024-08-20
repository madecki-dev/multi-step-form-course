import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TableOfContentContext } from "./TableOfContentContext";

export default function useTableOfContent() {
  const { updateItems, items, indexedPaths } = useContext(
    TableOfContentContext
  );
  const location = useLocation();
  const navigate = useNavigate();

  const proceed = (markAsDone?: boolean) => {
    if (markAsDone) {
      const itemsToModify = [...items];
      const item = itemsToModify.find(
        (item) => item.path === location.pathname
      );
      if (item) {
        item.isDone = true;
      } else return;

      updateItems && updateItems(itemsToModify);
    }

    if (indexedPaths) {
      const item = items.find((item) => item.path === location.pathname);
      item && navigate(indexedPaths[indexedPaths?.indexOf(item.path)! + 1]);
    }
  };

  return {
    proceed,
  };
}
