import BootstrapClient from "@/ui/bootstrapclient/bootstrap-client";
import { Inter } from "next/font/google";
import { Navbar } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
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
  