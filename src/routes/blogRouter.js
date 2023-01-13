import express from 'express';
import { createPost, getAllPosts } from '../controllers/blogController';

const router = express.Router();
router.route('/').get(getAllPosts).post(createPost);

export default router;
