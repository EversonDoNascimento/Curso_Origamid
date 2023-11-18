import { Children } from "react";

const Input = ({ label, id, type, ...props }) => {
  return (
    <>
      <label>{label}</label>
      <input id={id} type={type} {...props}></input>
    </>
  );
};

export default Input;
