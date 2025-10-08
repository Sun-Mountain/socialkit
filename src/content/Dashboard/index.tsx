'use client';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { NoProfile } from "./NoProfile";
import { Landing } from "./Landing";
import { Profile } from "@prisma/client";

export const DashboardContent = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();
  const userId = session?.user.id;

  const getProfile = async () => {
    try {
      const res = await fetch(`/api/profile?userId=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        console.log('Failed to fetch profile');
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      setIsLoading(false);
      setProfile(data);
    } catch (error) {
      // console.error('Error fetching profile:', error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!userId) return;

    getProfile();
  }, [userId]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {
        profile ? (
          <Landing profile={profile} />
        ) : (
          <NoProfile />
        )
      }
      {/* {profile ? (
        <>
          Yay, profile!
        </>
      ) : isLoading ? (
        <p>Loading profile...</p>
      ) : <NoProfile />
      } */}
    </>
  );
}