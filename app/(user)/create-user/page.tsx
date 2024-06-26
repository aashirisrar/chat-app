"use client";

import { useState } from "react";
import { useQuery } from "react-query";

import { Button } from "@/components/ui/button";
import createUser from "@/app/api/user/createuser";

export default function CreateUserPage() {
  const [id, setId] = useState<number>();
  const [enabled, setEnabled] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => await createUser(),
    staleTime: 10000,
    enabled: enabled,

    onSuccess: () => setEnabled(false),
  });

  function search(formData) {
    const id = formData.get("id");
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

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
            <label>id</label>
            <input type="string" className="bg-secondary border" name="id" />
            <label>name</label>
            <input type="string" className="bg-secondary border" name="name" />
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
      {data && (
        <div>
          <div>id: {data.id}</div>
          <div>email: {data.email}</div>
        </div>
      )}
    </div>
  );
}
