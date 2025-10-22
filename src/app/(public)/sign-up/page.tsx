import AccountForm from '@/components/Forms/Account';

import { FooterLinks } from '@/content/Footer';

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <AccountForm signUpForm />
      <FooterLinks location="main" />
    </div>
  );
};

export default SignUpPage;