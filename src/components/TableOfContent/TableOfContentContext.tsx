import { createContext, useEffect, useState } from "react";
import { TableOfContentItem } from "./TableOfContent";

type TableOfContentContextType = {
  items: TableOfContentItem[];
  updateItems?: (items: TableOfContentItem[]) => void;
  indexedPaths?: string[];
};

export const TableOfContentContext = createContext<TableOfContentContextType>({
  items: [],
});

export function TableOfContentProvider({
  items,
  children,
}: {
  items: TableOfContentItem[];
  children: React.ReactNode;
}) {
  const [itemsState, setItemsState] = useState(items);
  const [indexedPaths, setIndexedPaths] = useState<string[]>([]);

  useEffect(() => {
    if (!itemsState || itemsState.length === 0) {
      return;
    }

    const paths: string[] = [];
    itemsState.forEach((item) => {
      paths.push(item.path);
      if (item.children) {
        item.children.forEach((child) => {
          paths.push(child.path);
        });
      }
    });

    setIndexedPaths(paths);
  }, [itemsState]);

  return (
    <TableOfContentContext.Provider
      value={{ items: itemsState, updateItems: setItemsState, indexedPaths }}
    >
      {children}
    </TableOfContentContext.Provider>
  );
}
