export default ({ icon, children, ...props }) => (
  <div className="flex justify-between items-center p-2 bg-green text-white rounded mt-2 cursor-pointer" {...props}>
    <div style={{ fontWeight: 300 }}>{children}</div>
    {icon}
  </div>
);
