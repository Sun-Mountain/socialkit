'use client';

import { useSession } from "next-auth/react";
import { WelcomeMsg } from "@/content/LandingPage/WelcomeMsg";
import { FooterLinks } from "../Footer";

import AccountForm from "@/components/Form/Account";

export const LandingPageContent = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session;

  return (
    <>
      {isAuthenticated ? (
        <p>You are logged in!</p>
      ) : (
        <>
          <WelcomeMsg />
        </>
      )}
    </>
  )
}