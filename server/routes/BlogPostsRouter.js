import express from "express";
import {GetPosts,CreatePosts} from "../controllers/BlogPostsController.js";

const router=express.Router();

//5000/posts/vs ... 
router.get("/",GetPosts);
router.post("/",CreatePosts);
export default router;