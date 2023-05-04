import useNavigation from "../hooks/use-navigation";

export default function Route({ path, children }) {
  const { currPath } = useNavigation();

  if (path === currPath) return children;
  return null;
}
