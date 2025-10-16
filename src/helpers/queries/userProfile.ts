import { Dispatch, SetStateAction } from "react";
import { Profile } from "@prisma/client";

export const getUserProfile = async ({
  userId,
  setProfile,
  setIsLoading
}: {
  userId: string;
  setProfile: Dispatch<SetStateAction<Profile | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}) => {
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
      setProfile(data);
      setIsLoading(false);
    } catch (error) {
      // console.error('Error fetching profile:', error);
      setIsLoading(false);
    }
  }