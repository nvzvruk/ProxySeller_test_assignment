import { memo, ChangeEvent } from "react";
import ToggleButton from "@/shared/components/ToggleButton";

interface SearchUsersProps {
  searchValue: string;
  orderValue: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOrderChange: (option: string) => void;
}

export const SearchUsers = memo<SearchUsersProps>(
  ({ searchValue, orderValue, onSearchChange, onOrderChange }) => {
    return (
      <div className="flex gap-2 p-4 rounded shadow-sm border">
        <input
          value={searchValue}
          onChange={onSearchChange}
          type="search"
          placeholder="Search by username"
          className="py-1 px-2 border rounded focus:outline-none focus:border-blue-500 text-sm"
        />
        <ToggleButton
          options={["ASC", "DESC"]}
          onToggle={onOrderChange}
          value={orderValue}
        />
      </div>
    );
  },
);
