import { memo } from "react";

interface AvatarPlaceholderProps {
  name: string;
}

export const AvatarPlaceholder = memo<AvatarPlaceholderProps>(({ name }) => {
  // Function to extract initials from the name
  const getInitials = (name: string) => {
    const nameArray = name.split(" ");
    return nameArray.map((part) => part.charAt(0)).join("");
  };

  return (
    <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full">
      <span className="text-md font-semibold">{getInitials(name)}</span>
    </div>
  );
});
