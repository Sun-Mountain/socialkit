import { Profile } from "@prisma/client";

interface LandingProps {
  profile: Profile;
}

export const Landing = ({ profile }: LandingProps) => {
  const displayName = profile.displayName || ` ${profile.firstName}`;

  return (
    <>
      <h2>Hello{displayName ? `, ${displayName}` : ''}!</h2>
    </>
  );
}