import asyncHandler from '../services/asyncHandler.js';
import dummyPosts from '../utils/dummyPosts.js';

/**********************************************************
 * @CREATE_COLLECTION
 * @route https://localhost:5000/api/post
 * @description Controller used for getting 20 posts
 * @description Accessible by Public
 *********************************************************/

export const getPosts = asyncHandler(async (_req, res) => {
    res.status(200).json({
        success: true,
        message: 'Get 20 Posts Success',
        data: dummyPosts
    });
});