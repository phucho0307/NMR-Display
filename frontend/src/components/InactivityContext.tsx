import React, { createContext, useEffect, useRef, ReactNode } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

interface InactivityContextProps {}

const InactivityContext = createContext<InactivityContextProps>({});

interface InactivityProviderProps {
  children: ReactNode;
}

export const InactivityProvider: React.FC<InactivityProviderProps> = ({ children }) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes
  const navigate = useNavigate(); // Initialize useNavigate

  const handleInactivity = () => {
    console.log("User inactive. Redirecting to the home page...");
    navigate("/"); // redirect to the home page
  };

  // Reset inactivity timer
  const resetTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleInactivity, INACTIVITY_TIMEOUT);
  };

  // Listen for user activity
  useEffect(() => {
    const activityEvents = ["mousemove", "keydown", "click", "scroll"];

    // Attach event listeners
    activityEvents.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    // Start timer on mount
    resetTimer();

    // Cleanup event listeners and timer on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []); // Empty dependency array

  return (
    <InactivityContext.Provider value={{}}>
      {children}
    </InactivityContext.Provider>
  );
};

export default InactivityContext;