import BootstrapClient from "@/ui/bootstrapclient/bootstrap-client";
import { Inter } from "next/font/google";
import Navbar from "@/ui/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
