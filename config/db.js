import mongoose, {mongo} from "mongoose";


const connectDB = async () => {
    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/PostsDB")
        console.log(`mongodb connected on ${conn.connection.host}... `);
    }
    catch(error){
        console.log(error);
    }
}

export default connectDB;