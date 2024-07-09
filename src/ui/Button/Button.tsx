import { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  onClick:MouseEventHandler<HTMLButtonElement>;
  className:string;
};

export const Button = ({ label, onClick, className }: ButtonProps) => {
  return <button onClick={onClick} className={className}>{label}</button>;
};
