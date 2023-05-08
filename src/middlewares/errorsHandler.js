import rescue from "express-rescue";
import { Error } from "mongoose";

export const castErrorHandler = rescue.from(Error.CastError, (err, req, res, next) =>
    res.status(404).send());

export const validationErrorsHandler = rescue.from(Error.ValidationError, (err, req, res, next) =>
    res.status(400).json({ error: err.message }));
