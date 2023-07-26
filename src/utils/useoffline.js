import { useEffect, useState } from "react";

const useOffline = () => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const LoadOnline = () => {
      setIsOffline(false);
    }
    const LoadOffline = () => {
      setIsOffline(true);
    }
    window.addEventListener("online", LoadOnline);
    window.addEventListener("offline", LoadOffline);

    return () => {
      window.removeEventListener("online", LoadOnline);
      window.removeEventListener("offline", LoadOffline);
    }
  }, []);
  return isOffline;
}

export default useOffline;