// app/hooks/useAuth.ts
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/");
    } else {
      // Simula validação ou espera para sincronizar com outra lógica
      setChecked(true);
    }
  }, [router]);

  return { checked };
}
