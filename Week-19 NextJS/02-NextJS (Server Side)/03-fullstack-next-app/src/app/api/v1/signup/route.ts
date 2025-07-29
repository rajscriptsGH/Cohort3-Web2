'use client'
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension";

export async function POST(req: NextRequest) {

    const data = await req.json()
    console.log(data);

    await PrismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })


    return NextResponse.json({
        msg: "u are signed up"
    })
}