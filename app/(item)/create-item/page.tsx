"use client";

import { useState } from "react";
import { useQuery } from "react-query";

import { Button } from "@/components/ui/button";
import createItem from "@/app/api/item/createitem";

export default function CreateItemPage() {
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [owner_id, setOwner_id] = useState();
  const [enabled, setEnabled] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => await createItem(id, title, description, owner_id),
    staleTime: 10000,
    enabled: enabled,

    onSuccess: () => setEnabled(false),
  });

  function search(formData) {
    const id = formData.get("id");
    const title = formData.get("title");
    const description = formData.get("description");
    const owner_id = formData.get("owner_id");

    setId(id);
    setTitle(title);
    setDescription(description);
    setOwner_id(owner_id);

    setEnabled(true);
  }

  if (isLoading) return <div>Loading Data</div>;

  if (isError) return <div>Error while loading data</div>;

  return (
    <div className="container mx-auto flex flex-col gap-4 items-center justify-center mt-8">
      <div>Create Item</div>
      <div>
        <div className="flex flex-col gap-3">
          <form action={search} className="flex flex-col gap-4">
            <label>id</label>
            <input type="string" className="bg-secondary border" name="id" />
            <label>title</label>
            <input type="string" className="bg-secondary border" name="title" />
            <label>description</label>
            <input
              type="string"
              className="bg-secondary border"
              name="description"
            />
            <label>owner_id</label>
            <input
              type="string"
              className="bg-secondary border"
              name="owner_id"
            />
            <Button type="submit">Create</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
