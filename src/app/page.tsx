import { HeaderNoAuth } from "@/components/pages/noAuth";

export default function Home() {
  return (
    <>
    <main className="flex flex-col items-center min-h-screen p-4">
      <div className="flex flex-col w-full max-w-6xl">
        <p className="text-1xl">&gt;_</p>
        <HeaderNoAuth />
      </div>
    </main>
    </>
  );
}
