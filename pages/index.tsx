import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <p className="text-bold">My-Next-Started-App!</p>
      <Link href="/movie">Movies </Link><br/>
      <Link href="/product">Products </Link><br/>
      <Link href="/about">About </Link>
    </div>
  );
}
