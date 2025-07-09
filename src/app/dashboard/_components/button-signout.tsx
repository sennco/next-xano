"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export function ButtonSignOut() {
  const router = useRouter();

  async function signOut() {
    localStorage.removeItem('authToken');
    router.push('/');
  }

  return (
    <Button onClick={signOut} className="mt-4">
      Sair da conta
    </Button>
  );
}