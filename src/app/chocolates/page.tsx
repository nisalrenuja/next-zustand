"use client";
import { useChocolateStore } from "./_store";

export default function Page() {
  const { chocolates } = useChocolateStore((state) => state);

  return (
    <main>
      <h1>Chocolates</h1>
      <p>How many Chocolates are in our Store? {chocolates}</p>
      <button>Increase</button>
      <button>Decrease</button>
    </main>
  );
}
