"use client";
import { useQuery } from "@tanstack/react-query";
import getUsers from "../api/user/getusers";
import user from "@/types/user";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsers(),
    staleTime: 10000,
  });

  if (isLoading) return <div>Loading Data</div>;

  if (isError) return <div>Error while loading data</div>;

  return (
    <div className="container mx-auto">
      <div>Hero</div>
    </div>
  );
}
