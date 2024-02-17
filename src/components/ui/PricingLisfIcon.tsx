import { ReactNode } from "react";

type Tname = {
  name: ReactNode;
};
const PricingLisfIcon = ({ name }: Tname) => {
  return (
    <li className="flex space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 h-5 rounded-full bg-[#E7F5E8] text-black p-1 w-5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l5 5l10 -10"></path>
      </svg>
      <span className="text-lg">{name}</span>
    </li>
  );
};

export default PricingLisfIcon;
