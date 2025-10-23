"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  return (
    <header
      className="w-full p-8 flex justify-between 
        lg:justify-around shadow-sm"
    >
      {user?.firstName ? (
        <h1 className="text-xl lg:text-4xl font-nunito italic">
          {user?.firstName}
          {`'s`} WorkSpace
        </h1>
      ) : (
        <h2 className="text-xl lg:text-2xl">
          sign in your name in your profile! {`->`}
        </h2>
      )}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
