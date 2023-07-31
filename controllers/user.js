import {v4 as uuidv4} from 'uuid';
import User from '../models/userModel.js';

export const createUser = async(req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({email})
    if (userExists){
        res.send("User already exists...")
    }

    const user = await User.create({name, email, password});
    if(user){
        res.send("user added...");
    }
    else{
        res.send("Error...")
    }
}

export const getUsers = async(req, res)=> {
    const users = await User.find()
    res.send(users)
};

export const getUser = async (req, res)=> {
    const {id} = req.params;
    const user = await User.findOne({_id:id});
    res.send(user)
}

export const updateUser = async (req, res)=> {
    const {id} = req.params;
    const { name, password, email } = req.body;

    const user = await User.updateOne({_id:id},{$set:{name, password}});
    if(user){
        res.send("user updated...")
    }
    else{
        res.send("Error...")
    }
}

export const deleteUser = async (req, res)=> {
    const {id} = req.params;
    const user = await User.deleteOne({_id:id});
    if(user){
        res.send("user Removed")
    }
    else{
        res.send("user not found...")
    }
}