import {v4 as uuidv4} from 'uuid';

let users = []

export const createUser = (req, res) => {
    const new_user = req.body;
    new_user["id"] = uuidv4();
    users.push(new_user)
    res.send("user added...")
}

export const getUsers = (req, res)=> {
    res.send(users)
};

export const getUser = (req, res)=> {
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id == id );
    res.send(foundUser)
}

export const updateUser = (req, res)=> {
    const {id} = req.params;
    const index = users.findIndex((user)=> user.id == id );
    let user_data = {}
    if(index != -1){
        user_data = req.body;
        user_data['id'] = id
        users[index] = user_data
        res.send(users)
    }
    else{
        res.send("User not found...")
    }
}

export const deleteUser = (req, res)=> {
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id == id );
    if(foundUser){
        users = users.filter((user)=> user.id != id );
        res.send("user Removed")
    }
    else{
        res.send("User not found...")
    }
}