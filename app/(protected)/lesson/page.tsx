import dynamic from "next/dynamic";

const LessonHomepage = dynamic(
  () => import("@/ui/lesson/lesson-home/lesson-home"),
  { ssr: false }
);

const lessonPage = () => {
  return <LessonHomepage />;
};

export default lessonPage;
