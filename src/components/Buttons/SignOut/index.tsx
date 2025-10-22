'use client';

import { Button } from '@/components/_UI/Button';
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return <Button className='submit-button' buttonAction={handleSignOut}>Sign Out</Button>;
}