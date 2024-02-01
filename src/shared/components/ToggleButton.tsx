import { FC, useState } from "react";

interface ToggleButtonProps {
  value: string;
  options: string[];
  onToggle: (selectedOption: string) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ options, onToggle, value }) => {
  const defaultActiveIndex = options.indexOf(value);
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const toggle = (index: number) => {
    setActiveIndex(index);
    onToggle(options[index]);
  };

  return (
    <div className="flex">
      {options.map((option, index) => (
        <button
          key={index}
          className={`${
            index === activeIndex
              ? "bg-emerald-500 text-white"
              : "border border-emerald-500 bg-white text-emerald-500"
          } py-1 px-2 text-sm first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md`}
          onClick={() => toggle(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
