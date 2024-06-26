"use client";

import { useState } from "react";
import { useQuery } from "react-query";

import { Button } from "@/components/ui/button";
import getItemById from "@/app/api/item/getitembyid";

export default function Home() {
  const [id, setId] = useState<number>();
  const [enabled, setEnabled] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => await getItemById(id),
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
      <div>Search Item by Id</div>
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
        <div className="flex gap-3" key={null}>
          <div>id: {data.id}</div>
          <div>title: {data.title}</div>
          <div>description: {data.description}</div>
          <div>owner's user id: {data.owner_id}</div>
        </div>
      )}
    </div>
  );
}
