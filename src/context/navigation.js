import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currPath, setCurrPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = (evt) => {
        setCurrPath(window.location.pathname)
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);
  return (
    <NavigationContext.Provider value={{}}>
      {currPath}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
