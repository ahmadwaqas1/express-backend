import {v4 as uuidv4} from 'uuid';
import Post from '../models/postModel.js';

export const createPost = async (req, res) => {
    const { title, content, userId } = req.body;

    const post = await Post.create({title, content, userId});
    if(post){
        res.send("post added...");
    }
    else{
        res.send("Error...")
    }
}

export const getPosts = async(req, res) => {
    const posts = await Post.find()
    res.send(posts)
};

export const getPost = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findOne({_id:id});
    res.send(post)
}

export const updatePost = async (req, res) => {
    const {id} = req.params;
    const { title, content } = req.body;

    const post = await Post.updateOne({_id:id},{$set:{title, content}});
    if(post){
        res.send("post updated...")
    }
    else{
        res.send("Error...")
    }
}

export const deletePost = async (req, res)=> {
    const {id} = req.params;
    const post = await Post.deleteOne({_id:id});
    if(post){
        res.send("post Removed")
    }
    else{
        res.send("post not found...")
    }
}