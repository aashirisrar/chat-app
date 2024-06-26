"use client";
import item from "@/types/item";
import getItems from "@/app/api/item/getitems";
import { useQuery } from "react-query";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: async () => await getItems(),
    staleTime: 10000,
  });

  if (isLoading) return <div>Loading Data</div>;

  if (isError) return <div>Error while loading data</div>;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-6 mt-6">
      <div>All Items</div>
      <div>
        {data?.map((item: item) => (
          <div className="flex gap-3" key={null}>
            <div>id: {item.id}</div>
            <div>title: {item.title}</div>
            <div>description: {item.description}</div>
            <div>owner's user id: {item.owner_id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
