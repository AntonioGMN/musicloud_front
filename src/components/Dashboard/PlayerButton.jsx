import Play from '../Icons/Play';
import Pause from '../Icons/Pause';

export default ({ playing, ...props }) => (
  <button {...props} type="button" className="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {!playing && <Play width={28} height={28} />}
    {playing && <Pause width={28} height={28} />}
  </button>
);
