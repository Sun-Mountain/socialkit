import Link from "next/link";

export const WelcomeMsg = () => {
  return (
    <div className="content-container welcome-msg">
      <h1 id="welcome-title">Welcome to Social Kit!</h1>
      <p>Thank you for checking out our app! We are still very new and very under construction so please bear with us. In the meantime, feel free to explore the <Link href="/sign-in">sign in</Link> and <Link href="/sign-up">sign up</Link> pages.</p>
      <p>We appreciate your patience and support as we continue to build and improve Social Kit.</p>
      <p>Stay tuned for more updates and features coming soon!</p>
      <p>Best regards,</p>
      <p>The Social Kit Team</p>
    </div>
  );
};
