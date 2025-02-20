import { NextResponse } from 'next/server';
import { user } from '../../../../util/db';
export async function GET(request, response) {
    let alid = await response.params;
    const data = user;
    const userdata = data.filter((item) => item.id == alid.id)
    return NextResponse.json(
        userdata.length === 0 ? 
        "No Data Found"
        : 
        userdata, { status: 200 });
}