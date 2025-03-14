import { user } from "../../../util/db";
import { NextResponse } from "next/server"

export function GET() {
    const data = user;
    return NextResponse.json(data,{status : 200});
}

export async function POST(request){
    let payload = await request.json();
    if(!payload.fullname || !payload.age || !payload.email || !payload.password){
        return NextResponse.json({result:"Requir Field Not Found", success : false},{status : 400});
    }
    return NextResponse.json({result:"new User Created", success : true},{status : 201});
    
}