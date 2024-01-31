import { type FC } from "react";

interface LoaderProps {
  autoSize?: boolean;
}

export const Loader: FC<LoaderProps> = ({ autoSize = false }) => {
  return (
    <div
      className={`flex justify-center items-center ${!autoSize && "w-full h-full"}`}
    >
      <div className="border-gray-300 h-6 w-6 animate-spin rounded-full border-2 border-t-primary" />
    </div>
  );
};
