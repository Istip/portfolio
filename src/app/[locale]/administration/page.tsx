"use client";

import { useState } from "react";
import { auth } from "@/utils/firebase";
import { User, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import Messages from "@/components/Dashboard/Messages";
import PageContainer from "@/components/Container/Container";
import Text from "@/components/Text/Text";
import Unauthorized from "@/components/Dashboard/Unauthorized";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredentials = await signInWithPopup(auth, provider);
      const { user } = userCredentials;

      if (user && user.uid === process.env.NEXT_PUBLIC_ADMIN_ID) {
        toast.success(
          <Text>
            Welcome back,{" "}
            <Text as="span" type="expandedBold">
              {user.displayName}
            </Text>
            !
          </Text>
        );
      }

      setUser(user as User);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Registration error: ${error.message}`);
      } else {
        toast.error(`An unknown error occurred: ${error}`);
      }
    }
  };

  const notAdmin = user?.uid !== process.env.NEXT_PUBLIC_ADMIN_ID;

  return (
    <PageContainer>
      {user ? (
        <>{notAdmin ? <Unauthorized /> : <Messages />}</>
      ) : (
        <div className="md:px-[50px] px-5 py-9 text-center h-[calc(100vh-75px)] w-screen center">
          <button
            onClick={handleGoogleAuth}
            className="rounded-xl bg-primary px-3 py-2"
          >
            Sign in with Google
          </button>
        </div>
      )}
    </PageContainer>
  );
}
