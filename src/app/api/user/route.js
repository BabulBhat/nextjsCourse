import { NextResponse } from 'next/server'
import User from '../../lib/model/usermodel';
import connectToMongo from '../../lib/db';


export async function GET(req,res){
    const { page = 1, limit = 10 } =  req.query;
    console.log(page);
    
    await connectToMongo();
    const payload = await User.find();
    return NextResponse.json({ result: payload, success: true },{status : 200})
}

export async function POST(req) {
    const payload = await req.json();
    await connectToMongo();
    const { email } = payload;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    const useremail = await User.findOne({ email });
    if (useremail) {
        return NextResponse.json({ result: "Email Already Exists", success: false })
    }
    const user = new User(payload);
    const result = await user.save();
    return NextResponse.json({ result: result, success: true },{status : 200})
}