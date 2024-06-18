import { z } from "zod";

// export interface CreateSubmissionDto {
//   userId: string;
//   probId: string;
//   code: string;
//   language: string;
// }

export const createSubmissionZodSchema = z
  .object({
    userId: z.string(),
    probId: z.string(),
    code: z.string(),
    language: z.string(),
  })
  .strict();

export type CreateSubmissionDto = z.infer<typeof createSubmissionZodSchema>;
