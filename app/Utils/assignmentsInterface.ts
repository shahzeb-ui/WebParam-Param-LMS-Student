export interface IAssignment {
  id: string;
  knowledgeId: string;
  title: string;
  description: string;
  blobUrl: string;
  rubrics: Rubric[];
  scheduledDate: string;
  isPublished: boolean;
}

interface Rubric {
  label: string;
  description: string;
  questionId: string;
  id: string;
  facilitatorScore: number;
  moderatorScore: number;
  facilitatorId: string;
  moderatorId: string;
  facilitatorMarkDate: string;
  moderatorMarkDate: string;
  moderatorFeedBack: string;
}