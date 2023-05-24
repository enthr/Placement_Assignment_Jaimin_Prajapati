import { Router } from 'express';
import { getPosts } from "../controllers/post.controller.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

// Get Posts
router.get("", isLoggedIn, getPosts);

export default router;