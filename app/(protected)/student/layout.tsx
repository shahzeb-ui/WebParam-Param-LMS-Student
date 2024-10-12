"use client";

import StudentDashboardSidebar from "@/ui/student/student-enrolled-courses/student-sidebar";
import styles from "@/styles/side-bar/side-bar-hide.module.css";
import MaintenanceModal from "@/ui/banner/MaintanceModal";
import { useState } from "react";

export default function StudentLayout() {
  return (
    <div className="d-flex">
      <StudentDashboardSidebar />
      <div></div>
    </div>
  );
}
