"use client";
import "./auth.scss";
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";
import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [flagsLoaded, setFlagsLoaded] = useState(false);
  

  useEffect(() => {
    flagsmith.init({
      environmentID: "GTGFWiyEFuVDfna2gjdqQC",
      onChange: () => {
        console.log("Flags updated", flagsmith.getAllFlags());
       
      },
      onError: (error) => {
        console.error("Error loading flags", error);
        setFlagsLoaded(true);
      },
    });
  }, []);

  useEffect(() => {
    flagsmith.init({
      environmentID: "GTGFWiyEFuVDfna2gjdqQC",
      onChange: () => {
        console.log("Flags updated", flagsmith.getAllFlags());
        setFlagsLoaded(true);
      },
      onError: (error) => {
        console.error("Error loading flags", error);
        setFlagsLoaded(true);
      },
    });
  }, []);

  return (
    <FlagsmithProvider
      options={{
        environmentID: "GTGFWiyEFuVDfna2gjdqQC",
      }}
      flagsmith={flagsmith}
    >
      <section className="layoutContainer">{children}</section>
    </FlagsmithProvider>
  );
}
