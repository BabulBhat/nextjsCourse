import { user } from "../../../../util/db";
import { NextResponse } from "next/server"

export async function GET(request, response) {
    const data = await response.params;
    const userdata = user.filter((item) => item.id == data.userid)
    const mainData = userdata.length == 0 ? { result: "No Data Found", success: false } : { result: userdata, success: true }
    return NextResponse.json(mainData, { status: 200 });
}



export async function PUT(request, response) {
    let payload = await request.json();
    let data = await response.params;
    payload.id = data.userid; // Put Id with Payload Varible Data...
    if (!payload.id || !payload.fullname || !payload.age || !payload.email || !payload.password) {
        return NextResponse.json({ result: "Require Data is Not Valid", success: false }, { status: 400 });
    }
    return NextResponse.json({ result: payload, success: true }, { status: 200 });
}



export async function DELETE(request,response){
    let data = await response.params;
    if(data.userid){
        return NextResponse.json({ result: "Delete Successfully", success: true }, { status: 200 });
    }
    else
    {
        return NextResponse.json({ result: "Internal Server Error", success: false }, { status: 400 });
    }
}