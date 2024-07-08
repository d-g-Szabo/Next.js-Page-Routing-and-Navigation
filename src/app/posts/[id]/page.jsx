import Link from "next/link";
export default function IDPage({ params }) {
  console.log(params);
  return (
    <>
      <h1 className="flex min-h-screen flex-col items-center justify-between p-24">
        This is the ID nested route!
        <p>Post Page : {params.id}</p>
        <Link href="/posts/1/2">Link to Comment</Link>
      </h1>
    </>
  );
}
