"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BootstrapClient from "@/ui/bootstrapclient/bootstrap-client";
import Navbar from "@/ui/navbar/navbar";
import { usePathname } from "next/navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-quill/dist/quill.snow.css";
import "react-responsive-modal/styles.css";

import "@/app/globals.css";

// Plugin CSS
import "@/public/css/plugins/fontawesome.min.css";
import "@/public/css/plugins/animation.css";
import "@/public/css/plugins/feather.css";
import "@/public/css/plugins/euclid-circulara.css";
import "@/public/scss/styles.scss";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Khumla App",
  description: "The App for online learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname != "/register" &&
          pathname != "/login" &&
          pathname != "/verify-account" && 
          pathname != "/forgot-password" &&
          pathname != "/forgot-password/otp" && <Navbar />}
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
