import NavigationContext from "../context/navigation";
import { useContext } from "react";

export default function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (evt) => {
    if (evt.metaKey || evt.ctrlKey) return;
    //
    evt.preventDefault();
    //prog navigatet o someother app
    navigate(to);
  };

  //warning for href
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
