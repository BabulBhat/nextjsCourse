import { NextResponse } from 'next/server';
import Product from '../../../lib/model/product';
export async function GET(req,res) {
    let id = await res.params;
    const filter = {_id:id.productid}
    const result = await Product.findById(filter);
    return NextResponse.json({ result,success: true })
}


export async function PUT(req,res) {
    let id = await res.params;
    const filter = {_id:id.productid}
    const payload = await req.json();
    const result = await Product.findByIdAndUpdate(filter,payload,{new :true});
    return NextResponse.json({ result: result,success: true })
}


export async function DELETE(req,res) { 
    let id = await res.params;
    const filter = {_id:id.productid}
    const result = await Product.findByIdAndDelete(filter);
    return NextResponse.json({ result: "result",success: true })
}