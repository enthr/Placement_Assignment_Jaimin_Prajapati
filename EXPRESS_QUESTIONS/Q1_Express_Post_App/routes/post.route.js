import { Router } from 'express';
import { getPosts } from '../controllers/post.controller.js';

const router = Router();

// Get 20 Posts
router.get('', getPosts);

export default router;