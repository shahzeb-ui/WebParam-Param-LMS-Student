'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { NextUIProvider } from "@nextui-org/react";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  


export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    AOS.init({
      duration: 2000,
    });
    router.push("/login")
  },[])


  return (
    <NextUIProvider>
      <main className={styles.main}>
      </main>
    </NextUIProvider>
  );
}
