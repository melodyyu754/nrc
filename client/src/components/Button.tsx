import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

const Button = ({ to, children }: Props) => {
  return (
    <Link to={to}>
      <button className="btn btn-outline-light">{children}</button>
    </Link>
  );
};

export default Button;
