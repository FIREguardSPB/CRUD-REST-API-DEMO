import Router from "express"
import {
    createPost,
    deletePost,
    editPost,
    getAllPosts,
    getUniquePost,
    getUniqueUserPosts
} from "../controllers/PostsControllers.js";
import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from "../middleware/roleMiddleware.js";

const apiRouter = new Router()

//end points
apiRouter
    .post('/posts', authMiddleware, createPost) //create post
    .get('/posts/user/:username', authMiddleware, getUniqueUserPosts )
    .get('/posts/', roleMiddleware(['ADMIN']), getAllPosts) //get all posts
    .get('/posts/:id', authMiddleware, getUniquePost) //get unique post
    .put("/posts", authMiddleware, editPost) // edit post
    .delete("/posts/:id", authMiddleware, deletePost) // delete post


export default apiRouter