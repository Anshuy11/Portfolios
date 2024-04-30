import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="py-2 px-3 text-xs text-Snow bg-black sm:bg-gradient-to-r from-Green/10  to-black  rounded-full">
      {title}
    </span>
  );
};

export default Badge;
