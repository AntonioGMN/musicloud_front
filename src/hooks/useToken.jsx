import { useContext } from "react";

import UserContext from "../contexts/UserContext";

export function useToken() {
  const { userData: user } = useContext(UserContext);

  return user.access_token;
}
