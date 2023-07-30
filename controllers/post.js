import {v4 as uuidv4} from 'uuid';
import Post from '../models/postModel.js';

let posts = []

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

export const getPosts = (req, res)=> {
    res.send(posts)
};

export const getPost = (req, res)=> {
    const {id} = req.params;
    const foundPost = posts.find((post)=> post.id == id );
    res.send(foundPost)
}

export const updatePost = (req, res)=> {
    const {id} = req.params;
    const index = posts.findIndex((post)=> post.id == id );
    let post_data = {}
    if(index != -1){
        post_data = req.body;
        post_data['id'] = id
        posts[index] = post_data
        res.send(posts)
    }
    else{
        res.send("post not found...")
    }
}

export const deletePost = (req, res)=> {
    const {id} = req.params;
    const foundPost = posts.find((post)=> post.id == id );
    if(foundPost){
        posts = posts.filter((post)=> post.id != id );
        res.send("post Removed")
    }
    else{
        res.send("post not found...")
    }
}