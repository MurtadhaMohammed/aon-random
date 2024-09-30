"use client";

import { RandomStudent } from "@/components/random";

export default function Page({params}) {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <RandomStudent course={params?.course} />
    </main>
  );
}
