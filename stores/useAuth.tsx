import React, { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "../supabase";

const AuthContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  useEffect(() => {

    if (supabase.auth.user()) {
      setUser(supabase.auth.user());
      setLoggedIn(true);
      setLoading(false);
    }

    let unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(supabase.auth.user());
        setLoggedIn(true);
        setLoading(false);

        return;
      }

      setLoggedIn(false);
      setUser(null);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    user,
    loggedIn,
  };
}