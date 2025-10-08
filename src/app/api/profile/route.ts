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

  if (!checkAuth(token, userId, 'canReadAny')) {
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

export async function POST (req: NextRequest) {
  const body = await req.json();
  const { userId } = body;

  const token = await getToken({ req });

  if (!checkAuth(token, userId, 'canCreateAny')) {
    return NextResponse.json(
      { message: "Unauthorized" },
      { status: 401 }
    );
  }

  if (!userId) {
    return NextResponse.json(
      { message: "Missing userId in request body" },
      { status: 400 }
    );
  }

  try {
    const existingProfile = await getProfileByUserId(userId);
    if (existingProfile) {
      return NextResponse.json(
        { message: "Profile already exists for this user" },
        { status: 409 }
      );
    }
    const newProfile = await createProfile(body);
    return NextResponse.json(newProfile, { status: 201 });
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}