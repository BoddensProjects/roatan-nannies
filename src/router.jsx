import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RouterContext = createContext(null);

function cleanPath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

export function LocalRouter({ children }) {
  const [path, setPath] = useState(() => cleanPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(cleanPath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const value = useMemo(
    () => ({
      path,
      navigate(to) {
        const nextPath = cleanPath(to);
        if (nextPath !== path) {
          window.history.pushState({}, "", nextPath);
          setPath(nextPath);
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      },
    }),
    [path],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRoute() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRoute must be used inside LocalRouter");
  }
  return context;
}

export function RouteLink({ to, className = "", children, ...props }) {
  const { navigate, path } = useRoute();
  const isActive = cleanPath(to) === path;
  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : `${className}${isActive ? " active" : ""}`.trim();

  return (
    <a
      {...props}
      className={resolvedClassName}
      href={to}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
