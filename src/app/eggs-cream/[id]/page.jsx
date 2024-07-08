// this is a dynamic route that will be nested under the eggs-cream route
// to access the value of the ID, you can use the params object
// the params object is passed to the component as a prop (folder name is the same as the file name) the value of the ID is accessed by using params.id
export default function IDPage({ params }) {
  console.log(params);
  return (
    <>
      <h1 className="flex min-h-screen flex-col items-center justify-between p-24">
        This is the ID nested route!
        <p>These are the params: {params.id}</p>
      </h1>
    </>
  );
}
