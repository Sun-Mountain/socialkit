import { NextRequest, NextResponse } from "next/server";

import { createProfile, getProfileByUserId } from "@db/lib/profile";

import { getToken } from 'next-auth/jwt';
import { checkAuth } from "@/helpers/checkAuth";

export async function GET (req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json(
      { message: "Missing userId parameter" },
      { status: 400 }
    );
  }

  const token = await getToken({ req });

  if (checkAuth(token, userId, 'canReadAny')) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  const profile = await getProfileByUserId(userId);

  if (!profile) {
    return NextResponse.json(
      { message: "Profile not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(profile, { status: 200 });
}