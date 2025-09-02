import { auth } from "@/auth";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  console.log("user on dashboard", session?.user?.name);
  return (
    <div>
      <h1>Welcome {session?.user?.name}</h1>
      <p>Your email is {session?.user?.email}</p>
    </div>
  );
};

export default Dashboard;
