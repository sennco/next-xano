"use client";

import { useEffect, useState } from "react";
import { ButtonSignOut } from "./_components/button-signout";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const [userName, setUserName] = useState<string | null>(null);
  const { checked } = useAuth(); // garante que só segue após a verificação

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const res = await fetch(
          "https://x8ki-letl-twmt.n7.xano.io/api:GS0AE33D/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        setUserName(data.name || "Usuário");
      } catch (err) {
        console.error("Erro ao buscar usuário:", err);
      }
    }

    if (checked) fetchUser();
  }, [checked]);

  if (!checked) {
    return null; // ou um spinner
  }

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-2xl font-bold mb-2">Página dashboard</h1>
      <h3>Usuário logado: {userName ?? "Carregando..."}</h3>
      <ButtonSignOut />
    </div>
  );
}
