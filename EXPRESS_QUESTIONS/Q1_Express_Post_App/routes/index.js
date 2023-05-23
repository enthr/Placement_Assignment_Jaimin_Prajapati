import { Router } from 'express';
import postRoutes from './post.route.js';

const router = Router();

router.use('/post', postRoutes);

export default router;