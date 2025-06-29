// src/ai/flows/answer-event-questions.ts
'use server';

/**
 * @fileOverview An AI chatbot that answers user questions about the event.
 *
 * - answerEventQuestions - A function that answers user questions about the event.
 * - AnswerEventQuestionsInput - The input type for the answerEventQuestions function.
 * - AnswerEventQuestionsOutput - The return type for the answerEventQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerEventQuestionsInputSchema = z.object({
  question: z.string().describe('The user question about the event.'),
});
export type AnswerEventQuestionsInput = z.infer<typeof AnswerEventQuestionsInputSchema>;

const AnswerEventQuestionsOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type AnswerEventQuestionsOutput = z.infer<typeof AnswerEventQuestionsOutputSchema>;

export async function answerEventQuestions(input: AnswerEventQuestionsInput): Promise<AnswerEventQuestionsOutput> {
  return answerEventQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerEventQuestionsPrompt',
  input: {schema: AnswerEventQuestionsInputSchema},
  output: {schema: AnswerEventQuestionsOutputSchema},
  prompt: `You are an AI chatbot that answers user questions about the event.
  Your goal is to provide helpful and informative answers to the user's questions.

  Question: {{{question}}}
  Answer: `,
});

const answerEventQuestionsFlow = ai.defineFlow(
  {
    name: 'answerEventQuestionsFlow',
    inputSchema: AnswerEventQuestionsInputSchema,
    outputSchema: AnswerEventQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
