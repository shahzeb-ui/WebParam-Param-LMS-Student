import React, { createContext, useContext, useState, ReactNode } from "react";

interface VideoContextType {
  selectedVideoUrl: string | null;
  setSelectedVideoUrl: (url: string | null) => void;
}

const VideoConext = createContext<VideoContextType | undefined>(undefined);

export const useVideo = (): VideoContextType => {
  const context = useContext(VideoConext);
  if (!context) {
    throw new Error("use Video must be used within a video provider.");
  }
  return context;
};

interface VideoProvideoProps {
  children: ReactNode;
}

export const VideoProvider: React.FC<VideoProvideoProps> = ({ children }) => {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  return (
    <VideoConext.Provider value={{ selectedVideoUrl, setSelectedVideoUrl }}>
      {children}
    </VideoConext.Provider>
  );
};
