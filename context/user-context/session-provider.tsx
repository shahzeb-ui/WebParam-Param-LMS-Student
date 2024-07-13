"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { createContext, useState, useEffect, useCallback } from 'react';
import Cookies from 'universal-cookie';

interface SessionContextType {
  sessionTime: number;
  updateUserActivity: () => void;
  resetSessionTime: () => void;
}

const SessionContext = createContext<SessionContextType | null>(null);

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const cookies = new Cookies();
  const router = useRouter();
  const pathName = usePathname();
  const [sessionTime, setSessionTime] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedSessionTime = localStorage.getItem('sessionTime');
      return storedSessionTime ? parseInt(storedSessionTime, 10) : 0;
    }
    return 0;
  });

  const [lastActivityTime, setLastActivityTime] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedLastActivityTime = localStorage.getItem('lastActivityTime');
      return storedLastActivityTime ? parseInt(storedLastActivityTime, 10) : Date.now();
    }
    return Date.now();
  });

  useEffect(() => {
    let interval: any;

    const startTimer = () => {
      if (pathName === "/" || pathName === "/Login") return; 
      interval = setInterval(() => {
        setSessionTime(prevTime => {
          const newTime = prevTime + 1;
          if (typeof window !== 'undefined') {
            localStorage.setItem('sessionTime', newTime.toString());
          }
          return newTime;
        });
      }, 1000);
    };

    const stopTimer = () => {
      clearInterval(interval);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    startTimer();

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pathName]);

  useEffect(() => {
    const checkInactivity = setInterval(() => {
      const currentTime = Date.now();
      if (currentTime - lastActivityTime >= 10000) { 
        logoutUser();
      }
    }, 10000); 

    return () => clearInterval(checkInactivity);
  }, [lastActivityTime]);

  const updateUserActivity = useCallback(() => {
    const currentTime = Date.now();
    setLastActivityTime(currentTime);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lastActivityTime', currentTime.toString());
    }
  }, []);

  const resetSessionTime = () => {
    setSessionTime(0);
    if (typeof window !== 'undefined') {
      localStorage.setItem('sessionTime', '0');
    }
  };

  const logoutUser = () => {
    cookies.remove("loggedInUser")
    resetSessionTime()
    router.push("/")
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateUserActivity);
    window.addEventListener('keydown', updateUserActivity);

    return () => {
      window.removeEventListener('mousemove', updateUserActivity);
      window.removeEventListener('keydown', updateUserActivity);
    };
  }, [updateUserActivity]);

  



  return (
    <SessionContext.Provider value={{ sessionTime, updateUserActivity, resetSessionTime }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionContext;