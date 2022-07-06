import Play from '../Icons/Play';
import Pause from '../Icons/Pause';

export default ({ playing, ...props }) => (
  <button {...props} type="button" className="text-white flex justify-center items-center z-10 h-[25px] w-[25px] bg-green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center mr-[13px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {!playing && <Play width={12} height={12} />}
    {playing && <Pause width={12} height={12} />}
  </button>
);
