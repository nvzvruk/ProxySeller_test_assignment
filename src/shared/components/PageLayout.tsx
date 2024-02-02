import { memo, ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export const PageLayout = memo<PageLayoutProps>(({ children }) => {
  return (
    <div className="grow h-full flex flex-col gap-2 p-4 max-w-6xl mx-auto w-full">
      {children}
    </div>
  );
});
