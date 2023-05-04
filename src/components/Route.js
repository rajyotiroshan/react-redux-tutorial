import { useContext } from "react";
import NavigationContext from "../context/navigation";

export default function Route({ path, children }) {
  const { currPath } = useContext(NavigationContext);

  if (path === currPath) return children;
  return null;
}
