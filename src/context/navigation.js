import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const [currPath, setCurrPath] = useState(window.location.pathname);
  useEffect(() => {
    const handler = (evt) => {
      setCurrPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to) => {
    window.history.pushState({}, "", to);
    setCurrPath(to);
  };

  return (
    <NavigationContext.Provider value={{}}>
      <div>
        <button onClick={() => navigate("/accordion")}>Go TO accordion</button>
        <br />
        <button onClick={() => navigate("/dropdown")}>Got to Dropdown</button>
      </div>
      {currPath}
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
