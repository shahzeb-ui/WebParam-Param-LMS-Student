// utils/useDeploymentTime.ts
import { useState, useEffect } from 'react';

interface DeploymentSlot {
  startTime: string;
  endTime: string;
}

export const useDeploymentTime = () => {
  const [showBanner, setShowBanner] = useState(false);

  const checkDeploymentTime = () => {
    const currentTime = new Date();
    const slots: DeploymentSlot[] = JSON.parse(process.env.NEXT_PUBLIC_DEPLOYMENTSLOTS || '[]');
    
    for (const slot of slots) {
      const [startHour, startMinute] = slot.startTime.split(':').map(Number);
      const [endHour, endMinute] = slot.endTime.split(':').map(Number);
      
      const startDate = new Date(currentTime);
      startDate.setHours(startHour, startMinute, 0);
      
      const endDate = new Date(currentTime);
      endDate.setHours(endHour, endMinute, 0);
      
      if (currentTime >= startDate && currentTime <= endDate) {
        return true;
      }
    }
    
    return false;
  };

  useEffect(() => {
    const updateBanner = () => {
      setShowBanner(checkDeploymentTime());
    };

    updateBanner();
    const interval = setInterval(updateBanner, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return { showBanner, checkDeploymentTime };
};