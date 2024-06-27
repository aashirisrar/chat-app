"use client";

import { useState } from "react";
import { useQuery } from "react-query";

import { Button } from "@/components/ui/button";
import createUser from "@/app/api/user/createuser";

export default function CreateUserPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enabled, setEnabled] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", email, password],
    queryFn: async () => await createUser(email, password),
    staleTime: 10000,
    enabled: enabled,

    onSuccess: () => setEnabled(false),
  });

  function search(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    setEmail(email);
    setPassword(password);
    // console.log(data);

    // console.log(id, name, email, password);
    setEnabled(true);
  }

  if (isLoading) return <div>Loading Data</div>;

  if (isError) return <div>Error while loading data</div>;

  return (
    <div className="container mx-auto flex flex-col gap-4 items-center justify-center mt-8">
      <div>Create User</div>
      <div>
        <div className="flex flex-col gap-3">
          <form action={search} className="flex flex-col gap-4">
            <label>email</label>
            <input type="email" className="bg-secondary border" name="email" />
            <label>password</label>
            <input
              type="password"
              className="bg-secondary border"
              name="password"
            />
            <Button type="submit">Create</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
