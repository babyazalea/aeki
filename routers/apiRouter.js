import express from "express";
import routes from "../routes";
import { postAddComment } from "../controllers/commentController";

const apiRotuer = express.Router();

apiRotuer.post(routes.addComment, postAddComment);

export default apiRotuer;
