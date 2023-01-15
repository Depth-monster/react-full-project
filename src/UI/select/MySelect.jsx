import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  //debugger
  return (
    <select
    //value & onChange для того, 
    //чтобы следить за изменениями в select
    value={value} 
    //передаем поле title/body
    onChange={event => onChange(event.target.value)}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
