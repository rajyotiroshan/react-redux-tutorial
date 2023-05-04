import NavigationContext from "../context/navigation";
import { useContext } from "react";

export default function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (evt) => {
    //
    evt.preventDefault();
    //prog navigatet o someother app
    navigate(to);
  };

  //warning for href
  return <a onClick={handleClick}>{children}</a>;
}
