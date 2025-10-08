import { db } from "@db/lib";
import { Profile, Prisma } from "@prisma/client";

export const getProfileByUserId = async (userId: string) => {
  return db.profile.findUnique({
    where: { userId: userId },
  });
};

export const createProfile = async (data: Prisma.ProfileCreateInput) => {
  return db.profile.create({
    data,
  });
};