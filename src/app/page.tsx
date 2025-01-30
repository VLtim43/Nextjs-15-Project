import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black ">
      <main className="flex flex-col justify-center justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 mx-auto text-white rounded-xl bg-black/90 w-4/5 sm:max-w96 sm:text-2xl">
          <h1 className="text-4xl font-bold">Test program</h1>
          <address>Test Adress</address>
          <p>Open Daily</p>
          <Link href={"tel:99999999"} className="hover:underline">
            999-99999
          </Link>
        </div>
      </main>
    </div>
  );
}
