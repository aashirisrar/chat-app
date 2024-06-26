"use client";

import { useState } from "react";
import { useQuery } from "react-query";

import { Button } from "@/components/ui/button";
import getUserById from "@/app/api/user/getuserbyid";

export default function Home() {
  const [id, setId] = useState<number>();
  const [enabled, setEnabled] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => await getUserById(id),
    staleTime: 10000,
    enabled: enabled,

    onSuccess: () => setEnabled(false),
  });

  const searchById = () => {
    setEnabled(true);
  };

  if (isLoading) return <div>Loading Data</div>;

  if (isError) return <div>Error while loading data</div>;

  return (
    <div className="container mx-auto flex flex-col gap-4 items-center justify-center mt-8">
      <div>Search User by Id</div>
      <div>
        <div className="flex gap-3">
          <input
            type="number"
            className="bg-secondary border"
            value={id}
            onChange={(e) => setId(Number(e.target.value))}
            required={true}
          ></input>
          <Button onClick={searchById}>Search</Button>
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
