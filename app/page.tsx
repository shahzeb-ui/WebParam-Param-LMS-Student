"use client"
import React from "react";
import { Routes, Route, MemoryRouter,  } from "react-router-dom";
import Login from "@/app/(auth)/login/page";
import RootLayout from "@/app/(auth)/layout";

export default function Page() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<RootLayout><Login /></RootLayout>} />
      </Routes>
    </MemoryRouter>
  );
}