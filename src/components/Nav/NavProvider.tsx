import { createContext, Dispatch, SetStateAction, useState } from "react";

export const NavContext = createContext<{
  title?: string;
  badgeText?: string;
  setTitle?: Dispatch<SetStateAction<string | undefined>>;
  setBadgeText?: Dispatch<SetStateAction<string | undefined>>;
}>({});

export default function NavProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navTitle, setTitle] = useState<string>();
  const [badgeText, setBadgeText] = useState<string>();

  return (
    <NavContext.Provider
      value={{ title: navTitle, setTitle, badgeText, setBadgeText }}
    >
      {children}
    </NavContext.Provider>
  );
}
