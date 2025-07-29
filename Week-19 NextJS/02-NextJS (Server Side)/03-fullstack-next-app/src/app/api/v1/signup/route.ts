import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient(); // ✅ correct

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data);

    await prisma.user.create({
        data: {
            username: data.username,
            password: data.password,
        },
    });

    return NextResponse.json({
        msg: "You are signed up",
    });
}
