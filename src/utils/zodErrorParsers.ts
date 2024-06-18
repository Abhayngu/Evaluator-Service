import { ZodError } from "zod";

export function zodErrorHandler(error: ZodError) {
  try {
    const issues = error.issues;
    const issueKeys = issues.map((issue) => issue.path[0]);
    return [
      issueKeys,
      issues.map(
        (issue) =>
          `${issue.message}${
            issue.path.length > 0 ? ` at path ${issue.path.map((p) => p)}` : ""
          }`
      ),
    ];
  } catch (err) {
    throw err;
  }
}
