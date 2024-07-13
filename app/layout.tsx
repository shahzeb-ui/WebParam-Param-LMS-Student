"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
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
import { SessionProvider } from "@/context/user-context/session-provider";

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
        <SessionProvider>
          {pathname != "/register" &&
            pathname != "/login" &&
            pathname != "/" &&
            pathname != "/verify-account" &&
            pathname != "/forgot-password" &&
            pathname != "/forgot-password/otp" && <Navbar />}
          {children}
          <BootstrapClient />
          <ToastContainer />
        </SessionProvider>
      </body>
    </html>
  );
}
