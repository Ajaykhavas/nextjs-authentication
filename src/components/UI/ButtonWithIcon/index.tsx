import React, { ReactNode } from "react";

interface ButtonWithiconProps {
  icon: ReactNode;
  text: string;
}

const ButtonWithicon = ({ icon, text }: ButtonWithiconProps) => {
  return (
    <button
      type="button"
      className="w-full mt-5 text-black bg-gray-100 focus:ring-4 rounded-lg text-xs px-5 py-2.5 text-center"
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div>
            <span className="h-4 w-4">{icon}</span>
          </div>
          <div>{text}</div>
        </div>

        <div>
          <svg
            className="w-2 h-2 text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ButtonWithicon;
