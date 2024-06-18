import express, { Router } from "express";
import { addSubmission } from "../../controllers/submissionController";
import { validate } from "../../validators/zodValidator";
import { createSubmissionZodSchema } from "../../dtos/CreateSubmissionDto";

const submissionRouter: Router = express.Router();

submissionRouter.post("/", validate(createSubmissionZodSchema), addSubmission);

export default submissionRouter;
