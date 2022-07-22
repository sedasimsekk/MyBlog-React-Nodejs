import blogPostsModel from "../models/BlogPostsModel.js";

export const GetPosts=async (req,res)=>{
  try {
    const posts=await blogPostsModel.find();
    res.status(200).json(posts);
  } catch (error) {
      res.status(404).json({
          message:error.message
      });
  }

};

export const CreatePosts=async (req,res)=>{
  const newPost=new blogPostsModel(req.body)
  try {
     await newPost.save();
  } catch (error) {
      res.status(409).json({
          message:error.message
      });
  }

};
