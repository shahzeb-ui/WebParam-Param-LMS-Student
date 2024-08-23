'use client'
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";  


export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    AOS.init({
      duration: 1200,
    });
    router.push("/login")
  },[])


  return (
  <main className={styles.main}>
  </main>
  );
}
