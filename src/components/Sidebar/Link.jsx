import { Link } from "react-router-dom";

export default ({ children, active = false, ...props }) => (
  <Link
    className="block p-2 mb-1 rounded text-white lowercase hover:bg-gray-light transition-colors cursor-pointer"
    style={{ ...(active && { backgroundColor: '#5f5f5f' }) }}
    {...props}
  >
    {children}
  </Link>
);
