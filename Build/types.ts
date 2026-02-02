
export type UserRole = 'admin' | 'co-admin' | 'student';

export interface User {
  id: string;
  username: string;
  password?: string;
  full_name?: string;
  role: UserRole;
  school?: string;
  class_name?: string;
  created_by?: string;
}

export interface Exam {
  id: string;
  name: string;
  total_questions: number;
  start_time: string;
  end_time: string;
  duration: number; // in minutes
  show_score: boolean;
  random_questions?: boolean; // New: Randomize question order
  random_options?: boolean;    // New: Randomize multiple choice options
  created_by: string;
}

export interface Question {
  id: string;
  exam_id: string;
  question_number: number;
  type: 'multiple_choice' | 'essay';
  question_text: string;
  options: string[];
  correct_answer: string;
}

export interface Submission {
  id: string;
  exam_id: string;
  student_id: string;
  score: number;
  answers: Record<string, string>;
  completed_at: string;
}
