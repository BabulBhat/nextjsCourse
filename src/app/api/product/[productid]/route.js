import { NextResponse } from 'next/server';
import Product from '../../../lib/model/product';
import { truncateSync } from 'fs';

export async function PUT(req,res) { 
    const productid = await res.params;
    const filter = {_id:productid.productid}
    const payload = await req.json();
    const result = await Product.findOneAndUpdate(filter,payload); 
    return NextResponse.json({ result , success: true })
}

export async function GET(req,res) {
    const productid = await res.params;
    const filter = {_id:productid.productid}
    const result = await Product.findById(filter); 
    return NextResponse.json({ result , success: true })
}

export async function DELETE(req,res) {
    const productid = await res.params;
    const filter = {_id : productid.productid}
    const result = await Product.deleteOne(filter);  
    return NextResponse.json({ result , success: true })
}