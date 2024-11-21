import { ExtendedCreateQuestionDto } from '@/interface/question';

export function calculateTotalMarks(
  questions: ExtendedCreateQuestionDto[],
  difficultyLevel: string,
): number {
  const filteredQuestions = questions.filter((q) => q.difficultyLevel === difficultyLevel);

  return filteredQuestions.reduce((sum, q) => sum + Number.parseFloat(q.totalMarks), 0);
}

export function calculatePercentage(
  questions: ExtendedCreateQuestionDto[],
  difficultyLevel: string,
): number {
  const filteredQuestions = questions.filter((q) => q.difficultyLevel === difficultyLevel);
  const percentage = (filteredQuestions.length / questions.length) * 100;

  return Number.parseFloat(percentage.toFixed(2));
}
