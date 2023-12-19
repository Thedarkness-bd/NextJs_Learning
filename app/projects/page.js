// import React from 'react'
"use client";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };

  return (
    <div>
      <h1>Projects</h1>
      <button
        className="border-2 bg-red-500 p-2 rounded-sm outline-none border-0 text-white"
        onClick={() => navigate("school")}
      >
        School page
      </button>
    </div>
  );
};

export default page;
