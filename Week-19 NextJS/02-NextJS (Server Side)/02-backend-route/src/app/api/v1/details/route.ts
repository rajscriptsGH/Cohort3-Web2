import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        name: "razz",
        email: "razz123Egmail.com"
    })
}