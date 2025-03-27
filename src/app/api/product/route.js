import { NextResponse } from 'next/server';
import connectToMongo from '../../lib/db';
import Product from '../../lib/model/product';
export async function GET() {
    let data = [];
    await connectToMongo();
    data = await Product.find();
    return NextResponse.json({ result: data })
}


export async function POST(req) {
    const payload = await req.json();
    await connectToMongo();
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({ result: result,success: true })
}