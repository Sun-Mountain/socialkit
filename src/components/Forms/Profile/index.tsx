import { FC, useState } from "react";
import { getSession } from "next-auth/react";
import { TextField } from "@/components/_ui/TextField";
import { Button } from "@/components/_ui/Button";
import { Profile } from "@prisma/client";

export const ProfileForm: FC<{ profile?: Profile | null, updateProfile?: boolean }> = ({ profile, updateProfile }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState<Partial<Profile>>({
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
    displayName: profile?.displayName || '',
    bio: profile?.bio || '',
  });

  const onSubmit = async (event: {
    preventDefault: () => void; currentTarget: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    console.log('Submitting profile form...');
    setIsLoading(true);

    const form = event.currentTarget;
    if (!form) {
      setIsLoading(false);
      return;
    }

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const userId = await getSession().then(session => session?.user?.id);
    const profileData = { ...data, userId };
    
    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.log('Error:', errorData);
        setIsLoading(false);
        return;
      } else {
        const responseData = await response.json();
        console.log('Profile saved successfully:', responseData);
        // Optionally reset the form or provide user feedback here
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting profile form:', error);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="First Name"
        name="firstName"
        helperText="Enter your first name"
        type="text"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="lastName"
        placeholder="Enter your last name"
        type="text"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Display Name"
        name="displayName"
        placeholder="Enter your display name"
        type="text"
        fullWidth
        margin="normal"
      />
      <TextField
        label="About Me"
        name="bio"
        placeholder="Tell us about yourself"
        type="text"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button type="submit" defaultDisabled={isLoading}>
        { isLoading ? (  <span>Saving...</span>  ) :
          updateProfile ? (  <span>Save Profile</span>  ) :
          (  <span>Create Profile</span>  ) }
      </Button>
    </form>
  );
}