import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const res = await prisma.user.create({
      data: {
        name: "sujan",
      },
    });
    console.log(res);

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    // console.log(error);

    return NextResponse.json({ error });
  }
};
