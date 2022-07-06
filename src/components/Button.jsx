export default ({ extraClasses = "", children, ...props }) => (
  <button className={`bg-transparent border border-green rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-green focus:outline-none ${extraClasses}`} {...props}>
    {children}
  </button>
);
