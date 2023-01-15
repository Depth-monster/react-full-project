import React from "react";

const MySelect = ({ options, defaultValue,value, onChange }) => {
  return (
    <select
    // fffffffffffffffffffffffff 1^10
    >
      <option disabled value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
