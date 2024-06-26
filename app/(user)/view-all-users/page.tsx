"use client";
import getUsers from "@/app/api/user/getusers";
import user from "@/types/user";
import { useQuery } from "react-query";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getUsers(),
    staleTime: 10000,
  });

  if (isLoading) return <div>Loading Data</div>;

  if (isError) return <div>Error while loading data</div>;

  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-6 mt-6">
      <div>All Users</div>
      <div>
        {data?.map((user: user) => (
          <div className="flex gap-3" key={null}>
            <div>id: {user.id}</div>
            <div>email: {user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
