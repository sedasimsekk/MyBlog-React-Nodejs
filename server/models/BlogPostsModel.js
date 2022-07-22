import mongoose from "mongoose";

const blogPostSchema=mongoose.Schema({
        blogTitle:String,
        blogSubtitle:String,
        blogContent:String,
        blogTag:String,
        blogImage:String,
        blogCreationdate:{
            type:Date,
            default:new Date(),
        }
});

const blogPost=mongoose.model("BlogPost",blogPostSchema);

export default blogPost;