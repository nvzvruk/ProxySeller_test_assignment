import { type FC } from "react";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header
      id="pageHeading"
      className="w-full p-4 flex justify-between bg-purple-600 text-white shadow-lg"
    ></header>
  );
};
