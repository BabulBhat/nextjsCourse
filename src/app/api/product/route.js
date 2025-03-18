import { NextResponse } from 'next/server';
import Product from "../../lib/model/product";
import connectToMongo from "../../lib/db";

export async function GET(req, res) {

    let data = [];
    try {
        await connectToMongo();
        data = await Product.find();
    } catch (error) {
        data = { success: false }
    }
    return NextResponse.json({ result: data })
}


export async function POST(req) {
    try {
        const payload = await req.json();
        await connectToMongo();
        let product = new Product(payload);
        const result = await product.save();
        return NextResponse.json({ result, success: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error, success: false })
    }
}
