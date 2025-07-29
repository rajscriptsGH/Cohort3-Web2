import { log } from "console";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const data = await req.json()
    console.log(data);


    return NextResponse.json({
        msg: "u are signed up"
    })
}