import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface AppLinkProps {
  path: string;
  className?: string;
  children: ReactNode;
}

export const AppLink = memo<AppLinkProps>(({ children, path, className }) => {
  return (
    <Link
      to={path}
      className={`text-blue-500 hover:underline hover:text-blue-700 ${className || ""}`}
    >
      {children}
    </Link>
  );
});
