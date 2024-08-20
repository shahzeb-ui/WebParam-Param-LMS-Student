interface Assessment {
    id: number;
    title: string;
    course: string;
    submissions: number;
    link: string;
  }

export const assessmentsData: Assessment[] = [
      {
        id: 1,
        title: "Write short essay on yourself using the 5 W's",
        course: "Fundamentals 101",
        submissions: 1,
        link: "/student/assessments/marked-assessment",
      },
      {
        id: 2,
        title: "Introduction to Project Management",
        course: "Project Management",
        submissions: 1,
        link: `/student/assessments/marked-assessment`,
      },
  ];