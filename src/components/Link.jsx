import { Link } from "react-router-dom";

export default ({ children, ...props }) => (
  <Link className="text-blue-link " {...props}>
    {children}
  </Link>
);
