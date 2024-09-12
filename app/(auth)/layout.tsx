"use client";
import "./auth.scss";
import flagsmith from "flagsmith";
import { FlagsmithProvider } from "flagsmith/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <FlagsmithProvider
      options={{
        environmentID: "TmQCzVJqriWe9USBFUFLyf",
      }}
      flagsmith={flagsmith}
    >
      <section className="layoutContainer">{children}</section>
    </FlagsmithProvider>
  );
}
