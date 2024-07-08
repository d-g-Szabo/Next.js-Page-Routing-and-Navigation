import Link from "next/link";
export default function PostsPage() {
  return (
    <>
      <h1 className="flex min-h-screen flex-col items-center justify-between p-24">
        This is the Posts page!
        <Link href="/posts/1">Link to Post 1</Link>
      </h1>
    </>
  );
}
