export default ({ children }) => (
  <div className="flex flex-col justify-start items-Start h-[calc(100%-80px)] w-[calc(100%-200px)] top-0 right-0 font-body bg-gradient-to-b from-gray-light to-gray-dark text-white absolute">
    {children}
  </div>
);
