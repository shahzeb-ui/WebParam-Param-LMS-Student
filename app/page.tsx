'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./page.module.css";
import { CourseIdProvider } from "@/context/courseId-context/courseId-context";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    router.push("/login");
  }, [router]);

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