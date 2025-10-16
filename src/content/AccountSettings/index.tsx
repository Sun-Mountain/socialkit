'use client';

import { ProfileForm } from "@/components/Forms/Profile";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Profile } from "@prisma/client";
import { getUserProfile } from "@/helpers/queries/userProfile";

export const AccountSettings = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const userId = session?.user.id;

  useEffect(() => {
    if (!userId) return;

    getUserProfile({ userId, setProfile, setIsLoading });
  }, [userId]);

  return (
    <>
      <h2>Account Settings</h2>
      <ProfileForm updateProfile profile={profile} />
    </>
  );
}