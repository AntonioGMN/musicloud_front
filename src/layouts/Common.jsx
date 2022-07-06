export default ({ children, ...props }) => (
  <div className="flex h-screen w-screen flex-col justify-center items-center font-body bg-gradient-to-b from-gray-light to-gray-dark text-white" {...props}>
    {children}
  </div>
);
