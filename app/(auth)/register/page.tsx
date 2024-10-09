"use client";

import { Suspense } from "react";
import RegisterPageContent from "./register";

export default function RegisterPage() {
  return (
    <Suspense>
      <RegisterPageContent />
    </Suspense>
  );
}