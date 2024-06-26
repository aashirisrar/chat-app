"use client";
import { useQuery } from "@tanstack/react-query";
import getUsers from "@/app/api/user/getusers";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getuserbyid(),
    staleTime: 10000,
  });

  if (isLoading) return <div>Loading Data</div>;

  if (isError) return <div>Error while loading data</div>;

  return (
    <div className="container mx-auto">
      <div>Search User by Id</div>
      <div>
        <div className="flex gap-3" key={null}>
          <div>id: {data.id}</div>
          <div>email: {data.email}</div>
        </div>
      </div>
    </div>
  );
}
