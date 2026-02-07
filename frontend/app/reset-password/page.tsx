"use client";

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");

  const updatePassword = async () => {
    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Password updated. You can now log in.");
      window.location.href = "/";
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>

      <input
        type="password"
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={updatePassword}>Update Password</button>
    </div>
  );
}
