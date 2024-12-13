import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  //we don't need the state, but we just need it to rerender whenever user clicks 'forward'
  // or 'back' button
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return window.removeEventListener("popstate", handler);
  }, []);

  const navigate = (to) => {
    //update the address bar
    window.history.pushState({}, "", to);
    //update the actual state and cause a rerender
    setCurrentPath(to);
  };
  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
