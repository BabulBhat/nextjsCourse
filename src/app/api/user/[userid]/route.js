import { NextResponse } from "next/server";
import User from '../../../lib/model/usermodel';
import connectToMongo from '../../../lib/db';
export async function GET(req, res) {
    try {
        const id = await res.params;
        const mainid = await id.userid;
        await connectToMongo()
        let filter = { _id: mainid }
        let findid = await User.findById(filter)
        return NextResponse.json({ result: findid, success: true })
    } catch (error) {
        return NextResponse.json({ result: error, success: false })
    }

}

export async function PUT(req,res) {
    const id = await res.params;
    await connectToMongo()
    let filter = {_id : id.userid}
    let payload = await req.json();
    console.log(payload);
    await User.findByIdAndUpdate(filter,payload,{new:true})
    return NextResponse.json({result : "Update Successfully",success :true})
}


export async function DELETE(req,res) {
    const id = await res.params;
    await connectToMongo()
    let filter = {_id : id.userid}
    await User.findByIdAndDelete(filter)
    return NextResponse.json({result : "Delete Successfully",success :true})
}