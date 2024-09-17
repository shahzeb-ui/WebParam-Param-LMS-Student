'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./page.module.css";
import { CourseIdProvider } from "@/context/courseId-context/courseId-context";
import Maintenance from "./maintenance";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });

    if (process.env.NEXT_PUBLIC_KILLSWITCH !== '001') {
      router.push("/login");
    }
  }, [router]);

  if (process.env.NEXT_PUBLIC_KILLSWITCH === '001') {
    return <Maintenance />;
  }

  return (
    <NextUIProvider>
      <CourseIdProvider>
        <main className={styles.main}>
          {/* Your content here */}
        </main>
      </CourseIdProvider>
    </NextUIProvider>
  );
}