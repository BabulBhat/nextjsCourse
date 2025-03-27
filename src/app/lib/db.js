import mongoose from 'mongoose';

const connectToMongo = () =>{
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected Successfully");
    
}

export default connectToMongo;