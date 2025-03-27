import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
    fullname: {
        type: String
    },
    email: {
        type: String,
        unique : true
    },
    password: {
        type: String
    },
    date: {
        type: Date,
        default : Date.now
    }
})

const User = mongoose.models.users || mongoose.model("users", UserSchema);
export default User;