import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AppLinkProps {
  path: string;
  children: ReactNode;
}

export const AppLink: React.FC<AppLinkProps> = ({ children, path }) => {
  return (
    <Link
      to={path}
      className="text-blue-500 hover:underline hover:text-blue-700"
    >
      {children}
    </Link>
  );
};