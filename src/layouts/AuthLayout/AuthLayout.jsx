import Logo from "../../components/Logo";

import Common from "../Common";

export default ({ children }) => (
  <Common>
    <div className="flex flex-col h-full justify-around items-center">
      <Logo />
      {children}
    </div>
  </Common>
);
