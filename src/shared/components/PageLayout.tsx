import { type FC, ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={`grow h-full flex flex-col gap-2 p-4`}>{children}</div>
  );
};
