import { connectMongoDB } from "@/lib/ConnectMongodb";
import Posts from "@/schema/PostSchema";

import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const posts = await Posts.find();
  return NextResponse.json({ posts });
}



