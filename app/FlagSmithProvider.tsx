"use client";
// export default function FlagSmithProvider({ }) { third }
import flagsmith from "flagsmith/isomorphic";
import { FlagsmithProvider } from "flagsmith/react";

export default async function FlagSmithProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <FlagsmithProvider
      options={{
        environmentID: "TmQCzVJqriWe9USBFUFLyf",
      }}
      flagsmith={flagsmith}
    >
      <>{children}</>
    </FlagsmithProvider>
  );
}
